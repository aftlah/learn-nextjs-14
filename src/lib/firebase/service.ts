import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

// ngambil data product dari firebase
export async function retrieveData(collectionName: string) {
    const snapshot = await getDocs(collection(firestore, collectionName));
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    return data;
}

// ngambil data by ID product dari firebase
export async function retrieveDataById(collectionName: string, id: string) {
    const snapshot = await getDoc(doc(firestore, collectionName, id));
    const data = await snapshot.data();
    return data;
}

// service register
export async function register(data: {
    fullname: string;
    username: string;
    email: string;
    password: string;
    role?: string;
}) {
    // mengecek query ke database sudah ada user email atau belum?
    const q = query(
        // "users" adalah nama tabel di firebase
        collection(firestore, "users"),
        where("email", "==", data.email)
    );
    const snapshot = await getDocs(q);
    const users = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    // mengecek apakah ada users yg sama di dalam data base
    if (users.length > 0) {
        return { status: false, statusCode: 400, message: "Email already exist" };
    } else {

        data.role = "member";
        // untuk enkripsi password, supaya mejadi angka acak
        data.password = await bcrypt.hash(data.password, 10);

        try {
            // simpan data ke database(firestore), ke collection/tabel "users", yang datanya itu data
            await addDoc(collection(firestore, "users"), data);
            return { status: true, statusCode: 200, message: "Register success" };
        } catch (error) {
            // kalau ada error saat register
            return { status: false, statusCode: 400, message: "Register failed" };
        }
    }
}



// mengambil data login dari firebase
export async function login(data: { email: string }) {
    const q = query(
        collection(firestore, "users"),
        where("email", "==", data.email),
    )

    const snapshot = await getDocs(q)
    const user = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))

    // console.log(user);
    

    if (user) {
        return user[0]
    } else {
        return null;
    }
}


// Login with Google
export async function loginWithGoogle(data: any, callback: any) {
    const q = query(
        collection(firestore, 'users'),
        where('email', '==', data.email),
    )

    const snapshot = await getDocs(q)
    const user : any = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))

    console.log(user);
    

    // console.log(user);
    // jika sudah ada data di dalam database
    if (user.length > 0) {
        // role tidak akan di update
        data.role = user[0].role;

        // akan melakukan update                          data ini mengambil dari parameter
        // mengecek ke dalam database, ada yg perlu diubah ga? kalo ada maka update saja
        // berdasarkan data yang paling baru
        await updateDoc(doc(firestore, 'users', user[0].id), data).then(() => {
            // return data;
            return callback({ status: true, data })
        });
    } else {
        // jika user belum terdaftar
        data.role = "member";
        await addDoc(collection(firestore, 'users'), data).then(() => {
            // return data;
            callback({ status: true, data })
        })
    }
}
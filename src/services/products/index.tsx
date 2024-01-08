export const getData = async (url: string) => {
    // fetching dari API yg ada di folder /api
    const res = await fetch(url,{
        // cache = Cache merujuk pada penyimpanan sementara data sehingga tidak perlu mengambilnya setiap kali ada permintaan
        // secara default cache: 'force-cache'
        cache: 'force-cache',
        // revalidate =  mengontrol seberapa sering halaman harus diperbarui. 
        // Revalidate dibagi menjadi 2, yaitu : Time-based Revalidation(secara otomatis menggunakan waktu) dan On-demand Revalidation (secara manual) 
        // Jika pengguna mengakses halaman setelah revalidate waktu (dalam detik) berlalu
        next:{
            // Time-based Revalidation
            // revalidate: 10

            // On-demand Revalidation
            // ini harus di trigger secara manual, bisa menggunakan button atau postman, thunderclient dan lainnya 
            // contohnya seperti di dashbord/product
            tags:['product']
        }
    })
    const datas = await res.json()
    const result = datas


    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return result

}
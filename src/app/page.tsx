import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Belajar NextJS",
  authors: [{name : "Altaf Fattah Amanullah",url : "https://github.com/aftlah"}],
  icons: {
    icon: "OIP.jpg",

  }
};

export default function Home() {
  // throw new Error("");
  return (
    <main className="flex  min-h-screen flex-col items-center justify-between p-24">
      Hellow World
    </main>
  )
}

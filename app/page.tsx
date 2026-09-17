import Image from "next/image";

export default function Home() {
console.log("I am from home. This is server site rendering")

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h2 className="text-5xl">WELCOME TO THE the NEXT JS CLUB</h2>
      </main>
    </div>
  );
}

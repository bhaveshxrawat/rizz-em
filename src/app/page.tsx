export default function Home() {
  return (
    <main className="min-h-screen grid items-center main-bg">
      <section className="w-[90%] shadow-lg rounded-xl overflow-clip flex mx-auto flex-col items-center p-20 md:px-6 bg-[url('/images/main-bg.webp')] bg-[#fcd0bb] bg-cover bg-no-repeat bg-center relative before:absolute before:inset-0 before:bg-black/10">
        <h1 className="text-5xl text-center md:text-3xl leading-[1.35] -translate-x-3 md:translate-x-0">
          Rizz&#39;em
        </h1>
        <a
          href="/login"
          className="bg-b-pink flex items-center text-[2rem] md:text-2xl px-6 py-[0.625rem] rounded-[2rem] heart gap-2 mt-[13.25rem] -translate-x-3 md:translate-x-0"
        >
          Generate one for me
        </a>
      </section>
    </main>
  );
}

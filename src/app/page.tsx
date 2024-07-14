export default function Home() {
    return (
        <main className="flex min-h-[800px] max-w-[1440px] mx-auto flex-col items-center p-20 md:px-6 bg-[url('/images/main-bg.webp')] bg-[#fcd0bb] bg-cover bg-no-repeat bg-center">
            <h1 className="text-5xl text-center md:text-3xl leading-[1.35] -translate-x-3">
                Pickup Line
                <br />
                Generator
            </h1>
            <a
                href="#"
                className="bg-b-pink flex items-center text-[2rem] md:text-2xl px-6 py-[0.625rem] rounded-[2rem] heart gap-2 mt-[13.25rem] -translate-x-3"
            >
                Generate one for me
            </a>
        </main>
    );
}

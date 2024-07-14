import Form from "./Form/Form";

export default function Create() {
    return (
        <section className="py-10 px-[3.25rem] relative z-1">
            <div className="max-w-[512px] mx-auto">
                <h1 className="text-b-pink text-5xl leading-[1.35] text-center">
                    Pickup Line Generator
                </h1>
                <Form />
            </div>
        </section>
    );
}

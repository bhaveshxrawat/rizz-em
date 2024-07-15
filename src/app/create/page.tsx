"use client";
import { useState } from "react";
import Form from "./Form/Form";
import SignOutBtn from "./ui/SignoutBtn";
import ErrorToast from "./ui/ErrorToast";

export default function Create() {
    const [errorOccurred, setErrorOccurred] = useState<boolean>(false);
    return (
        <>
            <section className="py-10 md:py-8 px-[3.25rem] md:px-6 relative z-1">
                <div className="grid grid-cols-[auto,minmax(280px,_512px),_auto] justify-between">
                    <h1 className="text-b-pink text-5xl leading-[1.35] text-center col-[2/3]">
                        Pickup Line Generator
                    </h1>
                    <Form cn="col-[2/3]" setErrorOccurred={setErrorOccurred} />
                    <SignOutBtn cn="col-[3/4] row-[1/2] md:row-[3/4] md:col-[2/3] md:justify-center md:mt-5" />
                </div>
            </section>
            {errorOccurred && <ErrorToast />}
        </>
    );
}

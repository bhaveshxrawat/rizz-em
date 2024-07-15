"use client";

import SignInBtn from "./ui/SignInBtn";

export default function Login() {
    return (
        <section className="grid grid-rows-[1fr,_auto] justify-center w-full">
            <div className="self-center">
                <figure>
                    <svg
                        width="43"
                        height="43"
                        viewBox="0 0 43 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto"
                    >
                        <rect
                            width="43"
                            height="43"
                            rx="8.19048"
                            fill="#FF2157"
                        />
                        <path
                            d="M29 20.375C29 24.75 22.5131 28.2913 22.2369 28.4375C22.1641 28.4767 22.0827 28.4972 22 28.4972C21.9173 28.4972 21.8359 28.4767 21.7631 28.4375C21.4869 28.2913 15 24.75 15 20.375C15.0012 19.3476 15.4098 18.3627 16.1362 17.6362C16.8627 16.9098 17.8476 16.5012 18.875 16.5C20.1656 16.5 21.2956 17.055 22 17.9931C22.7044 17.055 23.8344 16.5 25.125 16.5C26.1524 16.5012 27.1373 16.9098 27.8638 17.6362C28.5902 18.3627 28.9988 19.3476 29 20.375Z"
                            fill="white"
                        />
                    </svg>
                    <div className="text-center mt-10">
                        <h2 className="font-semibold text-xl leading-[1.2] text-[#212121] -tracking-[0.04em]">
                            Pickup line generator
                        </h2>
                        <p className="text-[#AAB5C0] -tracking-[0.02em] font-medium mt-4">
                            Generate pickup line for your crush now!
                        </p>
                    </div>
                </figure>
                <SignInBtn />
            </div>
            <div>
                <p className="text-[#AAB5C0] font-medium text-sm text-cente">
                    By signing up, you agree to the{" "}
                    <a href="" className="underline">
                        Terms of Use
                    </a>
                    ,{" "}
                    <a href="" className="underline">
                        Privacy Notice
                    </a>
                </p>
            </div>
        </section>
    );
}

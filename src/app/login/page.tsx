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
                <button className="mx-auto mt-[1.75rem] max-w-[400px] w-full justify-center flex items-center gap-2 px-4 py-[0.875rem] rounded-3xl font-semibold text-[#212121] bg-[#FAFAFA]">
                    <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15.037 7.19437H14.5V7.16671H8.49998V9.83337H12.2676C11.718 11.3857 10.241 12.5 8.49998 12.5C6.29098 12.5 4.49998 10.709 4.49998 8.50004C4.49998 6.29104 6.29098 4.50004 8.49998 4.50004C9.51965 4.50004 10.4473 4.88471 11.1536 5.51304L13.0393 3.62737C11.8486 2.51771 10.256 1.83337 8.49998 1.83337C4.81831 1.83337 1.83331 4.81837 1.83331 8.50004C1.83331 12.1817 4.81831 15.1667 8.49998 15.1667C12.1816 15.1667 15.1666 12.1817 15.1666 8.50004C15.1666 8.05304 15.1206 7.61671 15.037 7.19437Z"
                            fill="#FFC107"
                        />
                        <path
                            d="M2.60199 5.39704L4.79232 7.00337C5.38499 5.53604 6.82032 4.50004 8.49999 4.50004C9.51966 4.50004 10.4473 4.88471 11.1537 5.51304L13.0393 3.62737C11.8487 2.51771 10.256 1.83337 8.49999 1.83337C5.93932 1.83337 3.71866 3.27904 2.60199 5.39704Z"
                            fill="#FF3D00"
                        />
                        <path
                            d="M8.5 15.1667C10.222 15.1667 11.7867 14.5077 12.9697 13.436L10.9063 11.69C10.2145 12.2161 9.36915 12.5007 8.5 12.5C6.766 12.5 5.29367 11.3943 4.739 9.85132L2.565 11.5263C3.66834 13.6853 5.909 15.1667 8.5 15.1667Z"
                            fill="#4CAF50"
                        />
                        <path
                            d="M15.037 7.19429H14.5V7.16663H8.5V9.83329H12.2677C12.0047 10.5721 11.5311 11.2177 10.9053 11.6903L10.9063 11.6896L12.9697 13.4356C12.8237 13.5683 15.1667 11.8333 15.1667 8.49996C15.1667 8.05296 15.1207 7.61663 15.037 7.19429Z"
                            fill="#1976D2"
                        />
                    </svg>
                    Sign in with Google
                </button>
            </div>
            <div>
                <p className="text-[#AAB5C0] font-medium text-sm text-center">
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

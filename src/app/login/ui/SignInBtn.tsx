import { createClient } from "@/lib/supabase/client";

export default function SignInBtn(props: { nextUrl?: string }) {
    const supabase = createClient();
    const userLogin = async () => {
        try {
            await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                    redirectTo: `${location.origin}/auth/callback?next=${
                        props.nextUrl || ""
                    }`,
                },
            });
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <button
            onClick={userLogin}
            className="mx-auto mt-[1.75rem] max-w-[400px] w-full justify-center flex items-center gap-2 px-4 py-[0.875rem] rounded-3xl font-semibold text-[#212121] bg-[#FAFAFA]"
        >
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
    );
}

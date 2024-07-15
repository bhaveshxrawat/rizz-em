import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function SignOutBtn({ cn }: { cn: string }) {
    const supabase = createClient();
    const router = useRouter();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.replace("/login");
    };
    return (
        <button
            onClick={handleLogout}
            className={`${cn} bg-[rgba(181,_0,_44,_0.13)] text-[#B5002C] flex items-center text-[2rem] md:text-2xl px-6 py-[0.625rem] rounded-[2rem]`}
        >
            Signout
        </button>
    );
}

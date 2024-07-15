export default function SignOutBtn({ cn }: { cn: string }) {
    return (
        <button
            className={`${cn} bg-[rgba(181,_0,_44,_0.13)] text-[#B5002C] flex items-center text-[2rem] md:text-2xl px-6 py-[0.625rem] rounded-[2rem]`}
        >
            Signout
        </button>
    );
}

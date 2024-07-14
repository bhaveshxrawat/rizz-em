export default function Label({
    labelText,
    forAtt,
}: {
    labelText: string;
    forAtt: string;
}) {
    return (
        <label
            className="text-[#A5455C] text-2xl leading-none tracking-[0.02em] mb-2"
            htmlFor={forAtt}
        >
            {labelText}
        </label>
    );
}

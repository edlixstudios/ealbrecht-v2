import { twMerge } from "tailwind-merge";

export default function ContentContainer({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return <div className={twMerge("container mx-auto p-4 xl:p-16", className)}>{children}</div>;
}

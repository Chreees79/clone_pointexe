import { PropsWithChildren } from "react";

interface IGradientCardProps extends PropsWithChildren {
    type: string;
    size?: string;
    padding?: string;
}

export const GradientCard = ({
    type,
    size,
    padding,
    children,
}: IGradientCardProps) => {
    return (
        <div
            className={`${size && type === "rounded" ? `rounded-full ${size}` : "rounded"} bg-gradient-to-r from-border-yellow to-border-orange text-white font-semibold rounded-full p-[2px] w-full`}
        >
            <div
                className={`bg-background-dark rounded-full flex justify-center items-center ${padding}`}
            >
                {children}
            </div>
        </div>
    );
};

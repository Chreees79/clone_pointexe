import { PropsWithChildren } from "react";

interface IGradientCardProps extends PropsWithChildren {
    type: string;
    size?: string;
    padding?: string;
    textContent?: boolean;
    bgColor?: string;
}

export const GradientCard = ({
    type,
    size,
    padding,
    bgColor,
    children,
}: IGradientCardProps) => {
    return (
        <div
            className={`${size && type === "rounded" ? `rounded-full ${size}` : "rounded"} bg-gradient-to-r from-border-yellow to-border-orange text-white font-semibold p-[2px] w-full`}
        >
            <div
                className={`${bgColor ? bgColor : "bg-background-dark"} rounded-full flex justify-center items-center ${padding}`}
            >
                {children}
            </div>
        </div>
    );
};

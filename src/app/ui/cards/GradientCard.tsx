import { PropsWithChildren } from "react";

interface IGradientCardProps extends PropsWithChildren {
    type: string;
}

export const GradientCard = ({ type, children }: IGradientCardProps) => {
    return (
        <div
            className={`${type === "rounded" ? "rounded-full w-[128px]" : "rounded"} bg-gradient-to-r from-border-yellow to-border-orange text-white font-semibold rounded-full p-[2px] w-full`}
        >
            {children}
        </div>
    );
};

import { PropsWithChildren } from "react";

interface IGradientCardProps extends PropsWithChildren {
    type: string;
}

export const GradientCard = ({ type, children }: IGradientCardProps) => {
    return (
        <div
            className={`${type === "rounded" ? "rounded-full" : "rounded"} bg-gradient-to-r from-border-yellow to-border-orange text-white font-semibold rounded-full p-[2px] w-full`}
        >
            <span
                className={`${type === "rounded" ? "rounded-full" : "rounded"} flex justify-center w-full bg-gray-900 rounded-full  hover:from-border-yellow hover:to-border-orange hover:bg-gradient-to-r hover:bg-cover hover:bg-no-repeat hover:bg-border-yellow hover:bg-opacity-100 hover:text-almost_black hover:font-semibold transition-all duration-700 text-white  py-2 px-4`}
            >
                {children}
            </span>
        </div>
    );
};

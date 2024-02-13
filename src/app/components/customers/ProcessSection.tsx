import Image from "next/image";
import BgProcess from "../../../../public/background_process.png";
import {
    TITLE_GRADIENT_TYPOGRAPHY,
    TITLE_TYPOGRAPHY,
} from "@/app/ui/utils/typography";
import { processList } from "./constants/processList";
import { useInView } from "@react-spring/web";

export const ProcessSection = () => {
    const [ref, inView] = useInView();
    return (
        <div className="flex flex-col items-center mt-40">
            <Image
                src={BgProcess}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Image de fond"
            />
            <h1
                className={`${TITLE_TYPOGRAPHY} text-xl md:text-4xl text-center`}
            >
                Notre{" "}
                <span
                    className={`${TITLE_GRADIENT_TYPOGRAPHY} text-xl md:text-4xl`}
                >
                    processus
                </span>
                .
            </h1>
            <div
                ref={ref}
                className={` ${inView ? "animate-scaleAnimation" : ""} flex flex-col md:flex-row md:flex-wrap justify-center gap-6 mt-12 px-6 lg: max-w-[900px] pb-12`}
                style={{
                    opacity: inView ? 1 : 0.85,
                    scale: inView ? 1 : 1,
                    transition: "2s ease-in-out",
                }}
            >
                {processList.map((item, index) => (
                    <div key={index} className="w-[264px] h-[264px]">
                        <div
                            className={`rounded-full w-[264px] bg-gradient-to-r from-border-yellow to-border-orange text-white font-semibold p-[2px] ${item.step === "step 04" || item.step === "step 05" ? "flex justify-center" : ""} `}
                        >
                            <div
                                className={`rounded-full w-[260px] bg-almost_black text-center ${item.step === "step 02" ? "py-[64px]" : "py-[75px]"} px-8`}
                            >
                                <p className="text-sm uppercase text-grey-disabled font-semibold pb-1">
                                    {item.step}
                                </p>
                                <p className="text-sm font-semibold text-grey-light pb-1">
                                    {item.title}
                                </p>
                                <p className="text-sm text-grey-classic pb-1">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

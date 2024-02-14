import {
    TEXT_TYPOGRAPHY,
    TITLE_GRADIENT_TYPOGRAPHY,
    TITLE_TYPOGRAPHY,
} from "@/app/ui/utils/typography";
import { expertisesList } from "../constants/expertisesList";
import { GradientCard } from "@/app/ui/cards/GradientCard";
import Image from "next/image";
import { inter } from "@/font/font";
import BgShape6 from "../../../../public/bg-shape-006-p-1080.png";

export const ExpertisesSection = () => {
    return (
        <div id="Expertise">
            <div className="bg-black h-[2px] mt-6 w-full"></div>
            <Image
                src={BgShape6}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Image de fond"
            />
            <div className="flex flex-col items-center text-center">
                <h1 className={`${TITLE_TYPOGRAPHY} text-center my-24`}>
                    Nos{" "}
                    <span className={TITLE_GRADIENT_TYPOGRAPHY}>
                        expertises
                    </span>
                    .
                </h1>
            </div>

            <div className="flex flex-row flex-wrap justify-center items-center gap-3 lg:gap-6 mt-6 mb-2">
                {expertisesList.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-card-bg rounded-3xl relative max-w-[350px] h-[350px] p-6 pb-6 lg:mt-0"
                    >
                        <div className="max-w-[64px] mt-6">
                            <GradientCard
                                type="rounded"
                                size={
                                    item.title === "Finances"
                                        ? "w-[55px]"
                                        : "w-[64px]"
                                }
                                padding="p-5"
                                bgColor="bg-card-bg"
                            >
                                <Image src={item.image} alt={item.alt} />
                            </GradientCard>
                        </div>
                        <div>
                            <h3
                                className={`${inter.className} text-almost_white font-bold text-3xl text-center py-2`}
                            >
                                {item.title}
                            </h3>
                            <p
                                className={`${TEXT_TYPOGRAPHY} text-sm text-center max-w-[350px] px-3`}
                            >
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

"use client";
import { GradientCard } from "@/app/ui/cards/GradientCard";
import {
    TITLE_GRADIENT_TYPOGRAPHY,
    TITLE_TYPOGRAPHY,
} from "@/app/ui/utils/typography";
import Image from "next/image";
import WorldMap from "../../../../public/world_map.png";
import { TechnologiesList } from "../constants/TechnologiesList";
import { inter } from "@/font/font";

export const TechnologiesSection = () => {
    return (
        <div>
            <div
                id="Technologies"
                className=" scroll-smooth scroll-mt-[108px] bg-black h-[2px] mt-8 w-full"
            ></div>
            <Image
                src={WorldMap}
                className="absolute inset-0 w-full h-full object-cover -z-10"
                alt="Image de fond"
            />
            <div className="flex justify-center mt-16">
                <h1 className={`${TITLE_TYPOGRAPHY} text-center`}>
                    Nos{" "}
                    <span className={TITLE_GRADIENT_TYPOGRAPHY}>
                        technologies
                    </span>
                    .
                </h1>
            </div>
            <div className="flex flex-col items-center justify-start md:flex-row md:flex-wrap md:justify-center md:items-start gap-1 md:gap-20 lg:gap-24 max-w-[900px] md:mx-auto pb-12 mt-16">
                {TechnologiesList.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center lg:self-start pt-12 lg:pt-0`}
                    >
                        <div className="flex items-center  max-w-[70px]">
                            <GradientCard
                                type="rounded"
                                size={
                                    item.title === "Technologies Innovantes" ||
                                    item.title === "Project Management"
                                        ? "w-[70px]"
                                        : "w-[64px]"
                                }
                                padding="p-5"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    width={
                                        item.title ===
                                            "Technologies Innovantes" ||
                                        item.title === "Project Management"
                                            ? 18
                                            : 24
                                    }
                                />
                            </GradientCard>
                        </div>
                        <h2
                            className={`${inter.className} text-almost_white text-xl font-semibold max-w-[150px] text-center pt-6`}
                        >
                            {item.title}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

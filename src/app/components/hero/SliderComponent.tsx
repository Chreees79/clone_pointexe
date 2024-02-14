"use client";
import Image from "next/image";
import { GradientCard } from "@/app/ui/cards/GradientCard";
import Quote from "../../../../public/Quote_white.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TEXT_TYPOGRAPHY } from "@/app/ui/utils/typography";
import { sliderList } from "../constants/sliderList";
import { useSlider } from "./hooks/useSlider";
import { useEffect } from "react";

export const SliderComponent = () => {
    const { menuContainerRef, scrollToLeft, scrollToRight } = useSlider();

    useEffect(() => {
        setTimeout(() => scrollToRight(), 1200);
    }, []);

    return (
        <div className="grid grid-cols-4 items-center w-[500px]">
            <div className="justify-self-center cursor-pointer">
                <ChevronLeft
                    width={50}
                    height={50}
                    color="#a7b5c3"
                    onClick={scrollToLeft}
                />
            </div>
            <div
                ref={menuContainerRef}
                className="col-span-2 flex flex-row overflow-x-scroll scroll-smooth gap-x-36"
            >
                {sliderList.map((item, index) => (
                    <div
                        id="slide"
                        key={index}
                        className={`flex flex-col items-center mt-6 lg:mt-0 w-[500px] h-[400px]`}
                    >
                        <div className="max-w-[128px]">
                            <GradientCard type="rounded" size="w-128px">
                                <div
                                    style={{
                                        borderRadius: "50%",
                                        overflow: "hidden",
                                    }}
                                >
                                    <Image src={item.image} alt={item.alt} />
                                </div>
                            </GradientCard>
                        </div>
                        <div className="pt-6 pb-6 text-center">
                            <Image src={Quote} alt={"Quote picture"} />
                        </div>
                        <div>
                            <p className={`${TEXT_TYPOGRAPHY} text-center`}>
                                {item.text}
                            </p>
                            <p className="text-base text-grey-disabled font-semibold text-center w-[200px] mt-4">
                                {item.signature}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="justify-self-center cursor-pointer">
                <ChevronRight
                    width={50}
                    height={50}
                    color="#a7b5c3"
                    onClick={scrollToRight}
                />
            </div>
        </div>
    );
};

"use client";
import { inter } from "@/font/font";
import Image from "next/image";
import Computer from "../../../public/computer.jpeg";
import BgShapeSimple from "../../../public/bg_shapes_simple.png";
import {
    TITLE_GRADIENT_TYPOGRAPHY,
    TITLE_TYPOGRAPHY,
} from "../ui/utils/typography";
import { communityList } from "./constants/communityList";
import { integrationCommunityList } from "./constants/integrationCommunityList";
import { useInView } from "@react-spring/web";

export const CommunitySection = () => {
    const [ref, inView] = useInView();
    const [ref2, inView2] = useInView();

    return (
        <div id="Consultants" className=" scroll-smooth scroll-mt-[100px]">
            <Image
                src={BgShapeSimple}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Image de fond"
            />
            <div
                ref={ref}
                className={`${inter.className} ${inView ? "animate-scaleAnimation" : ""} text-4xl text-grey-light font-bold text-center mt-24 px-6 w-full `}
                style={{
                    opacity: inView ? 1 : 0,
                    scale: inView ? 1 : 1,
                    transition: "2s ease-in-out",
                }}
            >
                <h1 className={TITLE_TYPOGRAPHY}>
                    Notre{" "}
                    <span className={TITLE_GRADIENT_TYPOGRAPHY}>
                        communauté
                    </span>
                    .
                </h1>
            </div>
            <div className="grid grid-cols-1 lg:flex lg:flex-row lg:justify-between lg:gap-x-8 items-center w-full mt-12 ">
                <div
                    className="order-last rounded-lg w-[338px] h-[236px] md:w-[480px] md:h-[320px] md:shrink-0 bg-gradient-to-r from-border-yellow to-border-orange text-white font-semibold p-[4px] mt-12 lg:mt-0"
                    style={{ borderRadius: "10%", overflow: "hidden" }}
                >
                    <div
                        className={` w-[330px] h-[230px] md:w-[473px] md:h-[312px] bg-almost_black text-center absolute`}
                        style={{ borderRadius: "10%", overflow: "hidden" }}
                    >
                        <Image src={Computer} alt={"image d'ordinateur"} />
                    </div>
                </div>
                <div
                    ref={ref2}
                    className={`${inView2 ? "animate-scaleAnimation" : ""} flex flex-col`}
                    style={{
                        opacity: inView2 ? 1 : 0,
                        transition: "2s ease-in-out",
                    }}
                >
                    {communityList.map((item, index) => (
                        <div key={index} className="max-w-[500px] leading-5">
                            <div className="flex flex-row gap-2 mt-4 ">
                                <h3 className="text-2xl text-grey-light font-semibold pb-4">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="text-sm text-grey-classic">
                                {item.text
                                    .split("\n")
                                    .map((partText, index) => (
                                        <p key={index}>{partText}</p>
                                    ))}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mb-24">
                <h2
                    className={`${inter.className} text-almost_white text-center text-2xl font-bold my-12`}
                >
                    Les avantages d&#39;intégrer notre communauté
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-24 md:grid-rows-2">
                    {integrationCommunityList.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-2 leading-6 mt-6 border-[1px] border-almost_black border-b-grey-disabled border-l-grey-disabled pl-4 pb-2"
                        >
                            <Image
                                src={item.image}
                                alt={item.alt}
                                width={24}
                                height={24}
                            />
                            <h3 className="text-grey-light text-lg">
                                {item.title}
                            </h3>
                            <p className="text-grey-classic text-base ">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

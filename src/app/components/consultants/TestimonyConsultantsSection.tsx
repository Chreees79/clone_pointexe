"use client";
import { GradientCard } from "@/app/ui/cards/GradientCard";
import Image from "next/image";
import Quote from "../../../../public/Quote_white.svg";
import Mamadou from "../../../../public/Mamadou.jpg";
import Emmanuel from "../../../../public/Emmanuel.jpg";

import {
    H3_TYPOGRAPHY,
    TEXT_TYPOGRAPHY,
    TITLE_GRADIENT_TYPOGRAPHY,
} from "@/app/ui/utils/typography";
import { useInView } from "@react-spring/web";

export const TestimonyConsultantsSection = () => {
    const [ref, inView] = useInView();
    const [ref2, inView2] = useInView();
    return (
        <div>
            <div
                className={`${inView ? "animate-scaleAnimation" : ""} flex flex-col lg:grid lg:grid-cols-3 lg:gap-x-8 items-center mt-24 pt-28`}
                style={{
                    opacity: inView ? 1 : 0.85,
                    scale: inView ? 1 : 1,
                    transition: "2s ease-in-out",
                }}
            >
                <div>
                    <h1 className={H3_TYPOGRAPHY}>
                        Témoignages{" "}
                        <span
                            className={`${TITLE_GRADIENT_TYPOGRAPHY} text-xl md:text-4xl`}
                        >
                            consultants
                        </span>
                        .
                    </h1>
                </div>
                <div
                    ref={ref}
                    className="flex flex-col items-center bg-card-bg rounded-lg relative max-w-[400px] h-[450px] pb-6 mt-20 lg:mt-0"
                >
                    <div className="max-w-[92px] -top-12 absolute">
                        <GradientCard type="rounded" size="w-128px">
                            <div
                                style={{
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                }}
                            >
                                <Image src={Mamadou} alt={"image de Mamadou"} />
                            </div>
                        </GradientCard>
                    </div>

                    <div className="pt-[115px] pb-6 text-center">
                        <Image src={Quote} alt={"Quote picture"} />
                    </div>
                    <div>
                        <p
                            className={`${TEXT_TYPOGRAPHY} text-sm text-center max-w-[350px] px-3`}
                        >
                            {" "}
                            La réactivité et la transparence dans le processus
                            de recrutement sont des clés majeures chez PointExe.
                            C&#39;est une entreprise qui place l&#39;humain et
                            la solidarité au coeur de ses préoccupations, avec
                            des projets innovants dans des domaines variés.
                        </p>
                        <p className="text-base text-grey-disabled font-semibold text-center mt-4">
                            Mamadou
                        </p>
                    </div>
                </div>
                <div
                    ref={ref2}
                    className={`${inView ? "animate-scaleAnimation" : ""} flex flex-col items-center bg-card-bg rounded-lg relative max-w-[400px] h-[450px] pb-6 mt-20 lg:mt-0`}
                    style={{
                        opacity: inView2 ? 1 : 0,
                        scale: inView2 ? 1 : 1,
                        transition: "2s ease-in-out",
                    }}
                >
                    <div className="max-w-[92px] -top-12 absolute">
                        <GradientCard type="rounded" size="w-128px">
                            <div
                                style={{
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                }}
                            >
                                <Image
                                    src={Emmanuel}
                                    alt={"Image d'Emmanuel"}
                                />
                            </div>
                        </GradientCard>
                    </div>

                    <div className="pb-6 text-center pt-[115px] ">
                        <Image src={Quote} alt={"Quote picture"} />
                    </div>
                    <div>
                        <p
                            className={`${TEXT_TYPOGRAPHY} text-sm text-center max-w-[350px] px-3`}
                        >
                            J&#39;apprécie particulièrement la transparence et
                            la qualité de la communication avec la société
                            PointExe. Catalin en particulier, ainsi que toute
                            l&#39;équipe, sont très réactifs, clairs et précis
                            pour toute demande ou question. Cela donne confiance
                            en l&#39;entreprise.
                        </p>
                        <p className="text-base text-grey-disabled font-semibold text-center mt-4">
                            Emmanuel
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

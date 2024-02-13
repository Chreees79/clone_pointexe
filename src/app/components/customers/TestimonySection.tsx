"use client";
import { GradientCard } from "@/app/ui/cards/GradientCard";
import Image from "next/image";
import Quote from "../../../../public/Quote_white.svg";
import Michel from "../../../../public/Michel.jpg";
import Julien from "../../../../public/Julien.jpg";

import {
    H3_TYPOGRAPHY,
    TEXT_TYPOGRAPHY,
    TITLE_GRADIENT_TYPOGRAPHY,
} from "@/app/ui/utils/typography";
import { useInView } from "@react-spring/web";

export const TestimonySection = () => {
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
                            clients
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
                                <Image src={Michel} alt={"Michel picture"} />
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
                            Mon expérience avec PointExe a été exceptionnelle.
                            La réactivité de l&#39;équipe s&#39;est vraiment
                            distinguée, en nous présentant des consultants
                            qualifiés en moins de 48 heures. Leur implication
                            dans la formation continue de leurs consultants est
                            un vrai plus !
                        </p>
                        <p className="text-base text-grey-disabled font-semibold text-center mt-4">
                            Michel
                        </p>
                        <p className="text-[11px] text-grey-disabled font-semibold text-center mt-4">
                            Mirix
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
                                <Image src={Julien} alt={"Michel picture"} />
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
                            Nous avions des besoins très spécifiques liés à
                            notre cœur de métier et nous étions confrontés à des
                            défis importants en matière de recrutement. PointExe
                            a répondu à nos besoins en un temps record. Ils ont
                            été transparents et réactifs tout au long du
                            processus.
                        </p>
                        <p className="text-base text-grey-disabled font-semibold text-center mt-4">
                            Julien
                        </p>
                        <p className="text-[11px] text-grey-disabled font-semibold text-center mt-4">
                            Boatngo
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

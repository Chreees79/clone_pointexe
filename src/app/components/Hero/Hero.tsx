"use client";
import { SliderComponent } from "../slider/SliderComponent";
import BgPurple from "../../../../public/bg_purple.png";
import { TITLE_GRADIENT_TYPOGRAPHY } from "../../ui/utils/TITLE_GRADIENT_TYPOGRAPHY";
import { GradientButton } from "../../ui/buttons/GradientButton";
import CheckSolid from "../../../../public/check-solid.svg";
import Image from "next/image";
import { LogoSection } from "./LogoSection";

export const Hero = () => {
    return (
        <>
            <div
                className={`px-6 md:px-0 mb-24 pt-24 bg-cover bg-center grid grid-cols-1 -mx-6 lg:grid-cols-2`}
                style={{
                    backgroundImage: `url(${BgPurple.src})`,
                }}
            >
                <div className="justify-self-center max-w-[448px]">
                    <h1 className=" text-center lg:text-start text-4xl md:text-6xl font-bold text-grey-light pb-4">
                        <span className={TITLE_GRADIENT_TYPOGRAPHY}>
                            Cabinet de{" "}
                        </span>
                        conseil Tech
                    </h1>
                    <h2 className="text-center lg:text-start text-base md:text-xl font-bold text-grey-light leading-6">
                        Chaque client est notre priorité absolue :
                    </h2>
                    <ul className="text-center lg:text-start leading-5 text-sm md:text-base text-grey-light font-bold py-4">
                        <li className="flex flex-row justify-between items-baseline">
                            <span className="pt-4 pr-2 shrink-0">
                                <Image
                                    src={CheckSolid}
                                    alt=""
                                    height={16}
                                    width={16}
                                />
                            </span>
                            Réactivité : Les experts qu&#39;ils vous faut en
                            quelques jours seulement
                        </li>
                        <li className="flex flex-row justify-between items-baseline">
                            <span className="pt-4 pr-2 shrink-0">
                                <Image
                                    src={CheckSolid}
                                    alt=""
                                    height={16}
                                    width={16}
                                />
                            </span>
                            Exclusivité : Vous avez un interlocuteur dédié,
                            disponible quand vous en avez besoin
                        </li>
                        <li className="flex flex-row justify-between  items-baseline">
                            <span className="pt-4 pr-2 shrink-0">
                                <Image
                                    src={CheckSolid}
                                    alt=""
                                    height={16}
                                    width={16}
                                />
                            </span>
                            Conseil : Un suivi et des recommandation sur-mesure,
                            tout au long de la mission
                        </li>
                    </ul>
                    <div className="flex justify-center lg:justify-start">
                        <GradientButton label={"Nous contacter"} />
                    </div>
                </div>
                <div className="justify-self-center pt-4 lg-pt-0">
                    <SliderComponent />
                </div>
            </div>
            <LogoSection />
        </>
    );
};

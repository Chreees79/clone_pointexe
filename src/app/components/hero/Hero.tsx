"use client";
import { SliderComponent } from "./SliderComponent";
import BgPurple from "../../../../public/bg_purple.png";
import {
    TITLE_GRADIENT_TYPOGRAPHY,
    TITLE_TYPOGRAPHY,
} from "../../ui/utils/typography";
import { GradientButton } from "../../ui/buttons/GradientButton";
import CheckSolid from "../../../../public/check-solid.svg";
import Image from "next/image";
import { LogoSection } from "./LogoSection";
import Link from "next/link";

export const Hero = () => {
    return (
        <>
            <div
                id="Hero"
                className={`px-6 md:px-0 mb-24 pt-24 bg-cover bg-center grid grid-cols-1  lg:grid-cols-2`}
                style={{
                    backgroundImage: `url(${BgPurple.src})`,
                }}
            >
                <div className="justify-self-center max-w-[448px]">
                    <h1 className={TITLE_TYPOGRAPHY}>
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
                    <div className="flex justify-center lg:justify-start pb-6">
                        <Link href={"/#footer"}>
                            <GradientButton label={"Nous contacter"} />
                        </Link>
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

"use client";
import { inter } from "@/font/font";
import Image from "next/image";
import Paris from "../../../public/Paris.jpeg";
import BgShape5 from "../../../public/bg-shape-05-p-500.png";
import {
    TITLE_GRADIENT_TYPOGRAPHY,
    TITLE_TYPOGRAPHY,
} from "../ui/utils/typography";

export const OurStorySection = () => {
    return (
        <div id="About" className=" scroll-smooth scroll-mt-[100px]">
            <Image
                src={BgShape5}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Image de fond"
            />
            <div
                className={`text-4xl text-grey-light font-bold text-center mt-24 px-6 w-full `}
            >
                <h1 className={TITLE_TYPOGRAPHY}>
                    Notre parcours: de consultants à{" "}
                    <span className={TITLE_GRADIENT_TYPOGRAPHY}>
                        fondateurs
                    </span>
                    .
                </h1>
            </div>
            <div className="grid grid-cols-1 lg:flex lg:flex-row lg:justify-between lg:gap-x-8 items-center w-full mt-12 ">
                <div
                    className="order-last rounded-lg w-[338px] h-[236px] md:w-[480px] md:h-[408px] md:shrink-0 bg-gradient-to-r from-border-yellow to-border-orange text-white font-semibold p-[4px] mt-12 lg:mt-0"
                    style={{ borderRadius: "10%", overflow: "hidden" }}
                >
                    <div
                        className={`w-[330px] h-[230px] md:w-[473px] md:h-[400px] bg-almost_black text-center absolute`}
                        style={{ borderRadius: "10%", overflow: "hidden" }}
                    >
                        <Image src={Paris} alt={"image de Paris"} fill />
                    </div>
                </div>
                <div>
                    <div className="max-w-[700px] leading-5">
                        <div className="flex flex-row gap-2 mt-4 "></div>
                        <div
                            className={`${inter.className} flex flex-col gap-4 text-base text-grey-classic`}
                        >
                            <p>
                                Point.Exe est né de la rencontre de Christopher
                                et Catalin, deux consultants qui ont commencé
                                leurs carrières dans le secteur des technologies
                                et de l&#39;information. Christopher dans une
                                orientation technique et Catalin dans la gestion
                                de projets. Ils ont passé des années à naviguer
                                dans les méandres de monde de la technologie, à
                                comporendre ses défis et à expérimenter ses
                                récompenses.
                            </p>
                            <p>
                                Notre vision commune nous a conduit à créer
                                notre propre cabinet de conseil.Forts d&#39;une
                                expérience de première main en tant que
                                développeurs et chefs de projet,nous avons
                                identifié les lavunes du marché et vu le
                                potentiel d&#39;une entreprise qui comprendrait
                                véritablement les besoins des cleints et des
                                consultants.
                            </p>
                            <p>
                                Notre mission est devenue évidente: combler la
                                pénurie de talents sur le marché de
                                l&#39;informatique en associant de façon précise
                                le bon consultant au bon projet. Cette vision a
                                été amplifiée par notre dévouement envers nos
                                consultants, en s&#39;assurant qu&#39;ils
                                bénéficient des meilleures conditions et
                                opportunités pour exceller.
                            </p>
                            <p>
                                Aujourd&#39;hui, en tant que fondateurs de The
                                Point Exe, nous sommes très fiers de notre
                                croissance, de nos partenariats et, plus
                                important encore, du développement de notre
                                communauté de développeurs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

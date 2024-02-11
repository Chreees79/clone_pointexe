import { inter } from "@/font/font";
import { linkList } from "../utils/constants/linkList";
import Link from "next/link";
import Logo from "../../../../public/logo gradient.svg";
import Image from "next/image";

const LINK_TYPOGRAPHY = `text-grey-disabled ${inter.className} hover:text-grey-light cursor-pointer lg:py-2`;

export const Footer = () => {
    return (
        <footer>
            <div className="bg-black h-[2px] mt-6 w-full"></div>
            <div className="grid grid-rows-3 grid-cols-1 lg:grid-cols-3 text-grey-classic bottom-0 gap-6 mt-20 w-full">
                <div className="flex justify-center flex-wrap md:justify-between md:flex-nowrap lg:flex-col gap-x-4 order-last lg:order-none h-[150px] px-2">
                    {linkList.map(
                        (item, index) =>
                            item.label !== "Accueil" && (
                                <div key={index} className={LINK_TYPOGRAPHY}>
                                    <Link
                                        href={
                                            item.path === "/#Expertise"
                                                ? "/#Technologies"
                                                : item.path === "/#Technologies"
                                                  ? "/#Expertise"
                                                  : item.path
                                        }
                                        className={`${item.label === "Accueil" ? "hidden" : ""}`}
                                    >
                                        {item.label === "Expertises"
                                            ? "Technologies"
                                            : item.label === "Technologies"
                                              ? "Expertises"
                                              : item.label}
                                    </Link>
                                </div>
                            )
                    )}
                    <a
                        href={"/terms-and-conditions"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={LINK_TYPOGRAPHY}
                    >
                        Conditions d&#39;utilisation
                    </a>
                    <a
                        href={"/privacy-policy"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={LINK_TYPOGRAPHY}
                    >
                        Politique de confidentialité
                    </a>
                </div>
                <div className="flex justify-center">
                    <Image src={Logo} alt={"pointExe logo"} />
                </div>
                <div className="grid grid-rows-3 justify-self-center gap-2 order-first lg:order-none">
                    <div className="text-center font-bold text-6xl">
                        Contactez <span>nous</span>.
                    </div>
                    <div>contactForm</div>
                    <button>button</button>
                </div>
            </div>
        </footer>
    );
};

"use client";
import { inter } from "@/font/font";
import { linkList } from "../navbar/constants/linkList";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../../../public/logo gradient.svg";
import Image from "next/image";
import { FooterForm } from "./components/FooterForm";

const LINK_TYPOGRAPHY = `text-grey-disabled ${inter.className} hover:text-grey-light text-sm cursor-pointer`;

export const Footer = () => {
    const pathname = usePathname();
    return (
        <footer
            id="footer"
            className=" scroll-smooth scroll-mt-[100px] lg:px-8 bottom-0 w-full mb-12"
        >
            <div
                className={`${pathname === "/terms-and-conditions" ? "hidden" : ""} bg-black h-[2px] mt-6 w-full`}
            ></div>
            <div className="flex flex-col gap-12 lg:grid lg:grid-cols-4 text-grey-classic bottom-0 mt-20">
                <div
                    className={` ${pathname === "/terms-and-conditions" ? "hidden" : ""} flex justify-center flex-wrap md:justify-between md:flex-nowrap lg:flex-col gap-4 order-last lg:order-none px-2`}
                >
                    {linkList.map(
                        (item, index) =>
                            item.label !== "Accueil" &&
                            item.label !== "Contact" && (
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
                <div
                    className={`${pathname === "/terms-and-conditions" ? "md:col-span-4" : ""} flex justify-center`}
                >
                    <Image src={Logo} alt={"pointExe logo"} />
                </div>
                <div
                    className={`${pathname === "/terms-and-conditions" ? "hidden" : ""}`}
                >
                    <FooterForm />
                </div>
            </div>
        </footer>
    );
};

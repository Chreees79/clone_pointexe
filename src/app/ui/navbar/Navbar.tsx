"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/logo gradient.svg";
import BurgerMenu from "../../../../public/burger_menu_grey.svg";
import BurgerMenuOpen from "../../../../public/burger_menu_white.svg";
import { SubItems } from "./components/SubItems";
import { linkList } from "./constants/linkList";
import { inter } from "@/font/font";
import { toggleSelected } from "./utils/toggleSelected";
import { GradientButton } from "../buttons/GradientButton";

export const Navbar = () => {
    const pathname = usePathname();
    const [activeIndex, setActiveIndex] = useState(-1);
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const handleBurgerMenu = () => {
        setIsMenuOpened(!isMenuOpened);
    };

    const handleNavLink = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleNavItem = (
        id: string,
        index: number,
        activeIndex: number,
        setActiveIndex: React.Dispatch<React.SetStateAction<number>>
    ) => {
        toggleSelected(index, activeIndex, setActiveIndex);
        handleNavLink(id);
    };

    useEffect(() => {
        const handleResize = () => {
            const thresholdSize = 1024;
            if (window.innerWidth >= thresholdSize) {
                setIsMenuOpened(false);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const newIndex = linkList.findIndex((item) => item.path === pathname);
        setActiveIndex(newIndex !== -1 ? newIndex : 0);
    }, [pathname]);
    return (
        <>
            <nav className="sticky top-0 flex flex-row justify-between items-center z-40 bg-background-dark p-4">
                <Link
                    href="/#Hero"
                    className={` ${pathname === "/terms-and-conditions" || pathname === "/privacy-policy" ? "hidden" : ""} p-2 `}
                >
                    <Image
                        src={Logo}
                        alt={"PointExe Logo"}
                        priority
                        style={{ width: "auto", height: "auto" }}
                    />
                </Link>
                <div className="flex justify-between text-sm text-grey-disabled lg:flex-grow">
                    <div className="hidden lg:flex gap-4">
                        {linkList.map((item, index) => (
                            <div
                                key={index}
                                className={`${index === activeIndex ? "text-grey-light" : "text-grey-disabled"} ${pathname === "/terms-and-conditions" || pathname === "/privacy-policy" ? "hidden" : ""} ${inter.className} font-semibold hover:text-grey-light cursor-pointer py-2`}
                            >
                                <Link
                                    href={item.path}
                                    onClick={() =>
                                        handleNavItem(
                                            item.id,
                                            index,
                                            activeIndex,
                                            setActiveIndex
                                        )
                                    }
                                >
                                    {item.label}
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div
                        className={`flex justify-center gap-4 items-center font-bold ${pathname === "/terms-and-conditions" || pathname === "/privacy-policy" ? "order-first ml-12" : "mx-auto"} `}
                    >
                        <p
                            className={`${inter.className} text-white underline`}
                        >
                            FR
                        </p>
                        <p>EN</p>
                    </div>
                </div>
                <div>
                    <div className="lg:hidden px-6">
                        <button onClick={handleBurgerMenu}>
                            {isMenuOpened ? (
                                <Image
                                    src={BurgerMenuOpen}
                                    alt="menu burger"
                                    width={24}
                                    height={24}
                                    style={{ width: "auto", height: "auto" }}
                                />
                            ) : (
                                <Image
                                    src={BurgerMenu}
                                    alt="menu burger"
                                    width={24}
                                    height={24}
                                    style={{ width: "auto", height: "auto" }}
                                />
                            )}
                        </button>
                    </div>
                    <div
                        className={`${pathname === "/terms-and-conditions" || pathname === "/privacy-policy" ? "hidden" : ""}`}
                    >
                        <Link href="/#footer" className="hidden lg:flex">
                            <GradientButton label="Nous contacter" />
                        </Link>
                    </div>
                </div>
            </nav>
            {isMenuOpened && (
                <div className="w-full">
                    <SubItems
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        setIsMenuOpened={setIsMenuOpened}
                    />
                </div>
            )}
        </>
    );
};

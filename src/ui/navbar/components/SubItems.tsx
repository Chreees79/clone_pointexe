import Link from "next/link";
import { navbarLinks } from "../constants/navbarLinks";
import { toggleSelected } from "../utils/toggleSelected";

interface ISubItemsProps {
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SubItems = ({
    activeIndex,
    setActiveIndex,
    setIsMenuOpened,
}: ISubItemsProps) => {
    const handleMenuBurger = (index: number) => {
        toggleSelected(index, activeIndex, setActiveIndex);
        setIsMenuOpened(false);
    };

    return (
        <div className="sticky z-40 flex flex-wrap justify-center text-grey-classic">
            {navbarLinks.map((item, index) => (
                <div
                    key={index}
                    className={`${index === activeIndex ? "text-grey-light" : "text-grey-disabled"} font-semibold hover:text-grey-light cursor-pointer px-5 py-2`}
                >
                    <Link
                        href={item.path}
                        onClick={() => handleMenuBurger(index)}
                    >
                        {item.label}
                    </Link>
                </div>
            ))}
        </div>
    );
};

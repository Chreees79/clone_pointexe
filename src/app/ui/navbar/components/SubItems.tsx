import Link from "next/link";
import { linkList } from "../constants/linkList";
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
        <div className="fixed z-40 grid grid-cols-1 gap-y-4 py-4 text-grey-classic bg-background-dark w-full">
            {linkList.map((item, index) => (
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

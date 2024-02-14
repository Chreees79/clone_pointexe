import { useRef } from "react";

export const useSlider = () => {
    const menuContainerRef = useRef<HTMLDivElement>(null);

    const scrollToLeft = () => {
        if (menuContainerRef.current) {
            menuContainerRef.current.scrollLeft -= 345;
        }
    };
    const scrollToRight = () => {
        if (menuContainerRef.current) {
            menuContainerRef.current.scrollLeft += 345;
        }
    };

    return {
        scrollToLeft,
        scrollToRight,
        menuContainerRef,
    };
};

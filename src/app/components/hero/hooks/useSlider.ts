import { useRef } from "react";

export const useSlider = () => {
    const menuContainerRef = useRef<HTMLDivElement>(null);

    const scrollToLeft = () => {
        if (menuContainerRef.current) {
            menuContainerRef.current.scrollLeft -= 332;
        }
    };
    const scrollToRight = () => {
        if (menuContainerRef.current) {
            menuContainerRef.current.scrollLeft += 332;
        }
    };

    return {
        scrollToLeft,
        scrollToRight,
        menuContainerRef,
    };
};

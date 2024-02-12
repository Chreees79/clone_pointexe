"use client";
import { useInView } from "@react-spring/web";
import { Hero } from "./Hero";

export const HomeComponent = () => {
    const [ref, inView] = useInView();

    return (
        <div
            ref={ref}
            className={` ${inView ? "animate-scaleAnimation" : ""}`}
            style={{
                opacity: inView ? 1 : 0,
                scale: inView ? 1 : 1,
                transition: "2s ease-in-out",
            }}
        >
            <Hero />
        </div>
    );
};

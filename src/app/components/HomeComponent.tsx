"use client";
import { useInView } from "@react-spring/web";
import { Hero } from "./Hero/Hero";

export const HomeComponent = () => {
    const [ref, inView] = useInView();

    return (
        <div
            ref={ref}
            className={` ${inView ? "animate-scaleAnimation" : ""} px-6`}
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

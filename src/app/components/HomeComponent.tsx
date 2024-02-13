"use client";
import { useInView } from "@react-spring/web";
import { Hero } from "./hero/Hero";
import { Customers } from "./customers/Customers";
import { ProcessSection } from "./customers/ProcessSection";
import { UseCaseSection } from "./customers/UseCaseSection";

export const HomeComponent = () => {
    const [ref, inView] = useInView();
    const [ref2, inView2] = useInView();
    const [ref3, inView3] = useInView();
    const [ref4, inView4] = useInView();

    return (
        <>
            <div
                ref={ref}
                className={` ${inView ? "animate-scaleAnimation" : ""} -mx-6`}
                style={{
                    opacity: inView ? 1 : 0,
                    scale: inView ? 1 : 1,
                    transition: "2s ease-in-out",
                }}
            >
                <Hero />
            </div>
            <div
                ref={ref2}
                className={` ${inView2 ? "animate-scaleAnimation" : ""} px-6`}
                style={{
                    opacity: inView ? 1 : 0.85,
                    scale: inView ? 1 : 1,
                    transition: "2s ease-in-out",
                }}
            >
                <Customers />
            </div>
            <div
                ref={ref3}
                className={` ${inView3 ? "animate-scaleAnimation" : ""} px-6`}
                style={{
                    opacity: inView3 ? 1 : 0.85,
                    scale: inView3 ? 1 : 1,
                    transition: "2s ease-in-out",
                }}
            >
                <ProcessSection />
            </div>
            <div
                ref={ref4}
                className={` ${inView4 ? "animate-scaleAnimation" : ""} px-6`}
                style={{
                    opacity: inView4 ? 1 : 0.85,
                    scale: inView4 ? 1 : 1,
                    transition: "2s ease-in-out",
                }}
            >
                <UseCaseSection />
            </div>
        </>
    );
};

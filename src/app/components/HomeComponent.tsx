"use client";
import { useInView } from "@react-spring/web";
import { Hero } from "./hero/Hero";
import { Customers } from "./customers/Customers";
import { ProcessSection } from "./customers/ProcessSection";
//build
export const HomeComponent = () => {
    const [ref, inView] = useInView();
    const [ref2, inView2] = useInView();
    const [ref3, inView3] = useInView();

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
                    opacity: inView ? 1 : 0.85,
                    scale: inView ? 1 : 1,
                    transition: "2s ease-in-out",
                }}
            >
                <ProcessSection />
            </div>
        </>
    );
};

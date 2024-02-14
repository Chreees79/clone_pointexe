"use client";
import { useInView } from "@react-spring/web";
import { Hero } from "./hero/Hero";
import { ProcessSection } from "./customers/ProcessSection";
import { UseCaseSection } from "./customers/UseCaseSection";
import { TestimonySection } from "./customers/TestimonySection";
import { CommunitySection } from "./consultants/CommunitySection";
import { TestimonyConsultantsSection } from "./consultants/TestimonyConsultantsSection";
import { CustomersSection } from "./customers/CustomersSection";
import { TechnologiesSection } from "./TechnologiesSection";
import { ContactUsSection } from "./ContactUsSection";
import { ExpertisesSection } from "./Expertises/ExpertisesSection";

export const HomeComponent = () => {
    const [ref, inView] = useInView();
    const [ref2, inView2] = useInView();
    const [ref3, inView3] = useInView();
    const [ref4, inView4] = useInView();
    const [ref5, inView5] = useInView();
    const [ref6, inView6] = useInView();
    const [ref7, inView7] = useInView();
    const [ref8, inView8] = useInView();
    const [ref9, inView9] = useInView();
    const [ref10, inView10] = useInView();

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
                    opacity: inView2 ? 1 : 0.85,
                    scale: inView2 ? 1 : 1,
                    transition: "2s ease-in-out",
                }}
            >
                <CustomersSection />
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
            <div
                ref={ref5}
                className={` ${inView6 ? "animate-scaleAnimation" : ""} px-6`}
                style={{
                    opacity: inView5 ? 1 : 0.85,
                    scale: inView5 ? 1 : 1,
                    transition: "2s ease-in-out",
                }}
            >
                <TestimonySection />
            </div>
            <div
                ref={ref6}
                className={` ${inView6 ? "animate-scaleAnimation" : ""} px-6`}
                style={{
                    opacity: inView6 ? 1 : 0.85,
                    scale: inView6 ? 1 : 1,
                    transition: "2s ease-in-out",
                }}
            >
                <CommunitySection />
            </div>
            <div
                ref={ref7}
                className={` ${inView7 ? "animate-scaleAnimation" : ""} px-6`}
                style={{
                    opacity: inView7 ? 1 : 0.85,
                    scale: inView7 ? 1 : 1,
                    transition: "2s ease-in-out",
                }}
            >
                <TestimonyConsultantsSection />
            </div>
            <div
                ref={ref8}
                className={` ${inView8 ? "animate-scaleAnimation" : ""} px-6`}
                style={{
                    opacity: inView8 ? 1 : 0.85,
                    scale: inView8 ? 1 : 1,
                    transition: "2s ease-in-out",
                }}
            >
                <TechnologiesSection />
            </div>
            <div
                ref={ref9}
                className={` ${inView9 ? "animate-scaleAnimation" : ""} px-6`}
                style={{
                    opacity: inView9 ? 1 : 0,
                    scale: inView9 ? 1 : 1,
                    transition: "2s ease-in-out",
                }}
            >
                <ContactUsSection />
            </div>
            <div
                ref={ref10}
                className={` ${inView10 ? "animate-scaleAnimation" : ""} px-6`}
                style={{
                    opacity: inView10 ? 1 : 0,
                    scale: inView10 ? 1 : 1,
                    transition: "2s ease-in-out",
                }}
            >
                <ExpertisesSection />
            </div>
        </>
    );
};

"use client";
import { useInView } from "@react-spring/web";
import { GradientCard } from "../ui/cards/GradientCard";
import Image from "next/image";
import Michel from "../../../public/Michel.jpg";

export const Hero = () => {
    const [ref, inView] = useInView();

    return (
        <div
            ref={ref}
            className={`${inView ? "bg-red opacity-100  duration-300 delay-700 ease-in-out" : "bg-red opacity-0 ease-in-out duration-300 delay-700"} opacity-100  duration-300 delay-700 ease-in-out flex flex-col gap-6 w-[200px]`}
        >
            <GradientCard type="rounded">
                <Image src={Michel} alt={"Michel picture"} />
            </GradientCard>
        </div>
    );
};

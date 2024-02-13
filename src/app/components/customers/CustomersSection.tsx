"use client";
import { GradientCard } from "@/app/ui/cards/GradientCard";
import {
    H2_TYPOGRAPHY,
    TEXT_TYPOGRAPHY,
    TITLE_GRADIENT_TYPOGRAPHY,
    TITLE_TYPOGRAPHY,
} from "@/app/ui/utils/typography";
import { useInView } from "@react-spring/web";
import Image from "next/image";
import Clock from "../../../../public/clock-solid.svg";
import Lock from "../../../../public/lock-solid.svg";
import UserGroup from "../../../../public/userGroup-solid.svg";

export const CustomersSection = () => {
    const [ref, inView] = useInView();
    const [ref2, inView2] = useInView();
    const [ref3, inView3] = useInView();

    const customersList = [
        {
            ref: ref,
            inView: inView,
            image: Clock,
            alt: "clock icon",
            title: "Vitesse",
            text: "Grâce à notre communauté d'experts triés sur le volet, nous trouvons le talent qu'il vous faut pour un démarrage rapide de votre projet. Tout en étant intransigeant sur le fit avec votre façon de travailler.",
        },
        {
            ref: ref2,
            inView: inView2,
            image: Lock,
            alt: "lock icon",
            title: "Exclusivité",
            text: "Nous faisons le choix audacieux de collaborer avec une nombre limité d'entreprises. Pourquoi ? Pour vous fournir l'accompagnement et la réactivité qui sont essentiels à la bonne marche de la mission.",
        },
        {
            ref: ref3,
            inView: inView3,
            image: UserGroup,
            alt: "users icon",
            title: "Support",
            text: "Nous suivons la mission depuis la définition du besoin jusqu'à sa finalisation. Vous bénéficiez d'un interlocuteur dédié, disponible quand vous l'êtes pour répondre à toutes vos questions.",
        },
    ];
    return (
        <div>
            <div
                id="Services"
                className=" scroll-smooth scroll-mt-[108px] bg-black h-[2px] mt-6 w-full"
            ></div>
            <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-4 lg:px-6 mt-12">
                <div className="lg:col-span-3 lg:order-first lg:justify-self-center lg:items-center ">
                    <div className="flex justify-center">
                        <h1 className={`${TITLE_TYPOGRAPHY} text-center`}>
                            Pour nos{" "}
                            <span className={TITLE_GRADIENT_TYPOGRAPHY}>
                                clients
                            </span>
                            .
                        </h1>
                    </div>

                    <h2 className={H2_TYPOGRAPHY}>
                        Nous combinons une expertise technique pointue et une
                        action rapide. Notre mission ? Concrétiser vos missions
                        rapidement, efficacement et à un coût maîtrisé.
                    </h2>
                </div>
                {customersList.map((item, index) => (
                    <div
                        key={index}
                        ref={item.ref}
                        className={`flex flex-col items-center lg:self-start ${item.inView ? "animate-scaleAnimation" : ""} pt-12 lg:pt-0`}
                        style={{
                            opacity: item.inView ? 1 : 0,
                            scale: item.inView ? 1 : 1,
                            transition: "2s ease-in-out",
                        }}
                    >
                        <div className="flex items-center  max-w-[70px]">
                            <GradientCard
                                type="rounded"
                                size="w-64px"
                                padding="p-5"
                            >
                                <Image src={item.image} alt={item.alt} />
                            </GradientCard>
                        </div>
                        <h2 className={`${H2_TYPOGRAPHY} font-semibold`}>
                            {item.title}
                        </h2>
                        <p
                            className={`${TEXT_TYPOGRAPHY} max-w-[428px] pt-6 text-center`}
                        >
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

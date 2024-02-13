import { inter } from "@/font/font";
import Image from "next/image";
import Mountain from "../../../../public/moutain.svg";
import Rocket from "../../../../public/rocket.svg";
import Plug from "../../../../public/context_plug.svg";
import Chartline from "../../../../public/chartline.svg";
import Phone from "../../../../public/phone.jpeg";

const useCaseList: {
    image: string;
    title: string;
    text: string;
}[] = [
    {
        image: Plug,
        title: "Contexte",
        text: "En tant que leader dans le secteur de l'installation de bornes de recharge électrique , notre client était confronté à une demande croissante de solutions numériques pour rationaliser et optimiser ses opérations",
    },
    {
        image: Mountain,
        title: "Challenge",
        text: "Avec un marché en plein essor et la numérisation au coeur des objectifs de performance, il était impératif de renforcer l'équipe de développement pour répondre rapidement aux nouvelles demandes tout en garantissant une qualité irréprochable",
    },
    {
        image: Rocket,
        title: "Notre solution",
        text: "Grâce à notre compréhension approfondie de leurs défis technologiques et à notre rapidité d'action, nous avons identifié et embarqué des développeurs spécialisés en moins de 48 heures. Chacun d'entre eux, rigoureusement sélectionné, disposant d'une expertise spécifique adaptée aux besoins de notre client.",
    },
    {
        image: Chartline,
        title: "Résultats",
        text: "Notre client a pu non seulement accélérer la mise en oeuvre de ses solutions numériques mais aussi bénéficier d'un accompagnement sur mesure, assurant une parfaite adéquation entre ses besoins et les compétences des consultants. Le résureltat ? Une amélioration notable de la satisfaction client et un renforcement de sa position sur le marché",
    },
];

export const UseCaseSection = () => {
    return (
        <div>
            <div
                className={`${inter.className} text-2xl text-grey-light font-bold text-center mt-24 w-full `}
            >
                <h2>
                    UseCase: Le leader de l&#39;installation de bornes de
                    recharge électrique
                </h2>
            </div>
            <div className="grid grid-cols-1 lg:flex lg:flex-row lg:justify-between lg:gap-x-8 items-center w-full mt-12 max-w-[1100px] mx-auto">
                <div
                    className="order-last rounded-lg w-[350px] h-[500px] bg-gradient-to-r from-border-yellow to-border-orange text-white font-semibold p-[4px] mt-12 lg:mt-0 shrink-0"
                    style={{ borderRadius: "10%", overflow: "hidden" }}
                >
                    <div
                        className={` w-[342px] h-[493px] bg-almost_black text-center shrink-0`}
                        style={{ borderRadius: "10%", overflow: "hidden" }}
                    >
                        <Image src={Phone} alt={"image de téléphone"} />
                    </div>
                </div>
                <div className="flex flex-col">
                    {useCaseList.map((item, index) => (
                        <div key={index}>
                            <div className="flex flex-row gap-2 mt-4">
                                <Image
                                    src={item.image}
                                    alt={"plug icon"}
                                    width={24}
                                    height={24}
                                />
                                <h3 className="text-grey-classic font-semibold">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="text-grey-classic text-lg max-w-[700px]">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

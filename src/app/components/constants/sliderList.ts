import Michel from "../../../../public/Michel.jpg";
import Julien from "../../../../public/Julien.jpg";
import Emmanuel from "../../../../public/Emmanuel.jpg";
import Mamadou from "../../../../public/Mamadou.jpg";
import { StaticImageData } from "next/image";

export const sliderList: {
    image: StaticImageData;
    alt: string;
    text: string;
    signature: string;
}[] = [
    {
        image: Mamadou,
        alt: "photo de Mamadou",
        text: "C'est une entreprise qui place l'homme et la solidarité au cœur de ses préoccupations, avec des projets innovants dans des domaines variés.",
        signature: "Mamadou",
    },
    {
        image: Emmanuel,
        alt: "photo de Emmanuel",
        text: "J'apprécie particulièrement la transparence et la qualité de la communication avec la société ThePointExe.",
        signature: "Emmanuel",
    },
    {
        image: Michel,
        alt: "photo de Michel",
        text: "Mon expérience avec ThePointExe a été tout à fait exceptionnelle.",
        signature: "Michel",
    },
    {
        image: Julien,
        alt: "photo de Julien",
        text: "ThePointExe a répondu à nos besoins en un temps record. Ils ont été transparents et réactifs tout au long du processus.",
        signature: "Julien",
    },
];

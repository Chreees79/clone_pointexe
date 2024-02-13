import Comment from "../../../../public/comment-dots-solid.svg";
import UserGraduate from "../../../../public/user-graduate-solid.svg";
import ArrowDots from "../../../../public/arrow-up-right-dots-solid.svg";
import SackDollars from "../../../../public/sack-dollar-solid.svg";

export const integrationCommunityList: {
    image: string;
    alt: string;
    title: string;
    text: string;
}[] = [
    {
        image: UserGraduate,
        alt: "image de diplômé",
        title: "Formation continue",
        text: "Le monde de l'informatique évolue, et vous aussi. Qu'il s'agisse de formations en ligne ou de certifications diplômantes, nous investissons dans votre avenir professionnel.",
    },
    {
        image: ArrowDots,
        alt: "image d'une flèche grimpante sur des points",
        title: "Opportunités de carrière",
        text: "Notre structure agile et moderne offre une progression rapide. Plus qu'un emploi, c'est une carrière que nous proposons.",
    },
    {
        image: Comment,
        alt: "image de commentaires",
        title: "Écoute et offres sur mesure",
        text: "Chaque consultant est unique. Nous prenons le temps d'écouter vos aspirations, votre projet professionnel, les compétences que vous souhaitez développer et, bien sûr, vos prétentions salariales. Notre objectif ? Trouver la mission qui vous ressemble.",
    },
    {
        image: SackDollars,
        alt: "image d'un sac de dollars",
        title: "Résultats",
        text: "Parce que le bien-être de nos consultants est primordial, nous offrons une rémunération qui correspond à vos compétences et des avantages sociaux adaptés à vos besoins.",
    },
];

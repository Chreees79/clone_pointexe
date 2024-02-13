import Theodo from "../../../../public/theodo.svg";
import Clariane from "../../../../public/clariane.svg";
import Guru from "../../../../public/guru.png";
import Cafffeine from "../../../../public/cafffeine.svg";
import Image from "next/image";

export const LogoSection = () => {
    return (
        <div className="flex justify-center flex-wrap gap-1 items-center justify-self-center w-full">
            <div className="mx-2 md:mx-6 my-[18px] max-w-[90px] md:max-w-[163px]">
                <Image src={Clariane} alt={"Clariane logo"} />
            </div>
            <div className="mx-2 md:mx-6 my-[18px] max-w-[70px] md:max-w-[120px]">
                <Image src={Guru} alt={"Guru logo"} />
            </div>
            <div className="mx-2 md:mx-6 my-[18px] max-w-[90px] md:max-w-[180px]">
                <Image src={Cafffeine} alt={"Cafffeine logo"} />
            </div>
            <div className="mx-2 md:mx-6 md:my-[18px] max-w-[90px] md:max-w-[163px]">
                <Image src={Theodo} alt={"Theodo logo"} />
            </div>
        </div>
    );
};

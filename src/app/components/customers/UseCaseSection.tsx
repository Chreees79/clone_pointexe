import { inter } from "@/font/font";
import Image from "next/image";
import Phone from "../../../../public/phone.jpeg";
import { useCaseList } from "../constants/useCaseList";

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
                    className="order-last rounded-lg w-[330px] h-[360px] md:w-[350px] md:h-[500px] md:shrink-0 bg-gradient-to-r from-border-yellow to-border-orange text-white font-semibold p-[4px] mt-12 lg:mt-0"
                    style={{ borderRadius: "10%", overflow: "hidden" }}
                >
                    <div
                        className={` w-[320px] h-[350px] md:w-[342px] md:h-[493px] bg-almost_black text-center`}
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

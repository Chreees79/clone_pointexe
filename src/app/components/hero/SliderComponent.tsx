import Image from "next/image";
import { GradientCard } from "@/app/ui/cards/GradientCard";
import Michel from "../../../../public/Michel.jpg";
import Quote from "../../../../public/Quote_white.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TEXT_TYPOGRAPHY } from "@/app/ui/utils/typography";

export const SliderComponent = () => {
    return (
        <div className="grid grid-cols-3 items-center  max-w-[448px]">
            <div className="justify-self-center">
                <ChevronLeft width={50} height={50} color="#a7b5c3" />
            </div>
            <div className="flex flex-col items-center mt-6 lg:mt-0">
                <div className="max-w-[128px]">
                    <GradientCard type="rounded" size="w-128px">
                        <div
                            style={{ borderRadius: "50%", overflow: "hidden" }}
                        >
                            <Image src={Michel} alt={"Michel picture"} />
                        </div>
                    </GradientCard>
                </div>

                <div className="pt-6 pb-6 text-center">
                    <Image src={Quote} alt={"Quote picture"} />
                </div>
                <div>
                    <p className={`${TEXT_TYPOGRAPHY} text-center`}>
                        Mon expérience avec ThePointExe a été tout à fait
                        exceptionnelle.
                    </p>
                    <p className="text-base text-grey-disabled font-semibold text-center mt-4">
                        Michel
                    </p>
                </div>
            </div>
            <div className="justify-self-center">
                <ChevronRight width={50} height={50} color="#a7b5c3" />
            </div>
        </div>
    );
};

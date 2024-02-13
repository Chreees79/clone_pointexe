import Link from "next/link";
import { GradientButton } from "../ui/buttons/GradientButton";
import {
    TITLE_GRADIENT_TYPOGRAPHY,
    TITLE_TYPOGRAPHY,
} from "../ui/utils/typography";

export const ContactUsSection = () => {
    return (
        <div>
            <div className="bg-black h-[2px] mt-6 w-full"></div>
            <div className="flex flex-col items-center mt-8">
                <h1 className={`${TITLE_TYPOGRAPHY} text-center mt-6`}>
                    Contactez{" "}
                    <span className={TITLE_GRADIENT_TYPOGRAPHY}>nous</span>.
                </h1>
                <div className="my-6 mx-auto">
                    <Link href="/#footer">
                        <GradientButton label={"Nous contacter"} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

"use client";
import { useState } from "react";
import { IData } from "../types/IData";
import { postContactMail } from "../utils/postContactMail";
import { PopUpConfirmation } from "./PopUpConfirmation";
import { TITLE_GRADIENT_TYPOGRAPHY } from "../../utils/typography";

const INPUT_STYLE =
    "bg-input-bg hover:bg-input-hover focus:outline-none focus:border-grey-disabled focus:border-[1px] text-grey-classic text-sm px-6";

export const FooterForm = () => {
    const [isFormSend, setIsFormSend] = useState(false);
    const [helperMessage, setHelperMessage] = useState("");
    const [formData, setFormData] = useState<IData>({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (field: keyof IData, value: string) => {
        setFormData((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const handleSubmit = () => {
        setIsFormSend(true);
        postContactMail({ formData, setHelperMessage });
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <div className="flex flex-col justify-self-center order-first mx-auto lg:order-none lg:col-span-2 px-6">
            <div className=" text-[40px] text-start md:text-center font-bold max-[700px]:text-5xl md:text-6xl px-2">
                Contactez{" "}
                <span className={TITLE_GRADIENT_TYPOGRAPHY}>nous</span>.
            </div>
            <div className="flex flex-col gap-[1px] mt-12 ">
                {isFormSend && (
                    <PopUpConfirmation
                        setIsFormSend={setIsFormSend}
                        helperMessage={helperMessage}
                    />
                )}
                <div>
                    <input
                        type="text"
                        placeholder="Nom"
                        className={`${INPUT_STYLE} h-[52px] w-full rounded-t-lg`}
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                    />
                </div>
                <div>
                    {" "}
                    <input
                        type="text"
                        placeholder="Adresse email"
                        className={`${INPUT_STYLE} h-[52px] w-full`}
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Votre message"
                        rows={5}
                        className={`${INPUT_STYLE} w-full rounded-b-lg py-4`}
                        value={formData.message}
                        onChange={(e) =>
                            handleChange("message", e.target.value)
                        }
                    />
                </div>
            </div>
            <div className="flex justify-end py-4">
                <button
                    className="flex justify-center px-4 py-2 font-semiBold rounded-full cursor-pointer border-2 hover:bg-almost_white hover:text-almost_black hover:font-semibold transition-all duration-700 w-[105px]"
                    onClick={handleSubmit}
                >
                    Envoyer
                </button>
            </div>
        </div>
    );
};

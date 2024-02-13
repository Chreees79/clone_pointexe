"use client";
import { useState } from "react";
import { IData } from "../types/IData";
import { postContactMail } from "../utils/postContactMail";
import { PopUpConfirmation } from "./PopUpConfirmation";
import { TITLE_GRADIENT_TYPOGRAPHY } from "../../utils/typography";
import { useValidation } from "../hooks/useValidation";

const INPUT_STYLE =
    "bg-input-bg hover:bg-input-hover focus:outline-none focus:border-grey-disabled focus:border-[1px] text-grey-classic text-sm px-6";

export const FooterForm = () => {
    const [isFormSend, setIsFormSend] = useState(false);
    const [helperMessage, setHelperMessage] = useState("");
    const [messageError, setMessageError] = useState("");
    const [nameTouched, setNameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [messageTouched, setMessageTouched] = useState(false);
    const [formData, setFormData] = useState<IData>({
        name: "",
        email: "",
        message: "",
    });
    const {
        handleEmailValidation,
        handleFieldValidation,
        handleNameValidation,
    } = useValidation();

    const handleChange = (field: keyof IData, value: string) => {
        setFormData((prevState) => ({
            ...prevState,
            [field]: value,
        }));
        field === "name" ? setNameTouched(true) : null;
        field === "email" ? setEmailTouched(true) : null;
        field === "message" ? setMessageTouched(true) : null;
    };

    const handleSubmit = () => {
        if (
            handleNameValidation(formData.name) &&
            handleFieldValidation(formData.message) &&
            handleEmailValidation(formData.email)
        ) {
            setIsFormSend(true);
            postContactMail({ formData, setHelperMessage });
            setFormData({
                name: "",
                email: "",
                message: "",
            });
            setMessageError("");
            setNameTouched(false);
            setEmailTouched(false);
            setMessageTouched(false);
        } else {
            setIsFormSend(false);
            setMessageError("format valide requis et champs obligatoires");
        }
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
                <p className="text-[10px] text-red-600">{messageError}</p>
                <div>
                    <input
                        type="text"
                        placeholder="Nom"
                        className={`${INPUT_STYLE} ${nameTouched && !handleNameValidation(formData.name) ? "border-2 border-red-700" : ""} h-[52px] w-full rounded-t-lg`}
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                    />
                </div>
                <div>
                    {" "}
                    <input
                        type="text"
                        placeholder="Adresse email"
                        className={`${INPUT_STYLE} ${emailTouched && !handleEmailValidation(formData.email) ? "border-2 border-red-700" : ""} h-[52px] w-full`}
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Votre message"
                        rows={5}
                        className={`${INPUT_STYLE} ${messageTouched && !handleFieldValidation(formData.message) ? "border-2 border-red-700" : ""} w-full rounded-b-lg py-4`}
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

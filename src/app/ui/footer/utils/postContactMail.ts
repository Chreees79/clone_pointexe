import { IData } from "../types/IData";

type postContactMailType = {
    formData: IData;
    setHelperMessage: React.Dispatch<React.SetStateAction<string>>;
};

export const postContactMail = async ({
    formData,
    setHelperMessage,
}: postContactMailType) => {
    try {
        const res = await fetch("/api", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (res.status === 200) {
            const data = await res.json();
            setHelperMessage("Message envoyé !");
            console.log(data);
        } else {
            setHelperMessage("Une erreur est survenue sur le serveur");
            throw new Error(`Status unexpected: ${res.status}`);
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

import { IData } from "../types/IData";

type postContactMailType = {
    formData: IData;
};

export const postContactMail = ({ formData }: postContactMailType) => {
    fetch("/api", {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                throw new Error(`Status unexpected: ${res.status}`);
            }
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

import { useEffect } from "react";

interface IPopUpConfirmationProps {
    setIsFormSend: React.Dispatch<React.SetStateAction<boolean>>;
    helperMessage: string;
}

export const PopUpConfirmation = ({
    setIsFormSend,
    helperMessage,
}: IPopUpConfirmationProps) => {
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (helperMessage?.length > 0) {
            timer = setTimeout(() => {
                setIsFormSend(false);
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [helperMessage, setIsFormSend]);
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            {helperMessage ? (
                <div
                    className={`${helperMessage === "Message envoyé !" ? "bg-gradient-to-r from-blue-light to-blue-dark " : "bg-gradient-to-r from-orange-600 to-orange-300 text-almost_black"} rounded-lg p-8 text-bold text-4xl gap-4 relative w-[500px] mx-6`}
                >
                    <p className="text-center">{helperMessage}</p>
                </div>
            ) : (
                <p className="text-grey-light text-xl">en attente....</p>
            )}
        </div>
    );
};

import { X } from "lucide-react";

interface IPopUpConfirmationProps {
    setIsFormSend: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PopUpConfirmation = ({
    setIsFormSend,
}: IPopUpConfirmationProps) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-blue-light rounded-lg p-8 text-bold text-4xl flex flex-col items-center gap-4 md:flex-row md:justify-between relative w-[500px] mx-6">
                <p className="text-center">Message envoyé !</p>
                <div
                    onClick={() => setIsFormSend(false)}
                    className="md:absolute md:top-2 md:right-2 order-last md:order-none"
                >
                    <X width={40} height={40} className="cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

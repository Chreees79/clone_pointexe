interface IGradientButtonProps {
    label: string;
}
export const GradientButton = ({ label }: IGradientButtonProps) => {
    return (
        <div>
            <button className="bg-gradient-to-r from-border-yellow to-border-orange text-white font-semibold rounded-full p-1 w-full">
                <span className="flex justify-center w-full bg-gray-900 rounded-full  hover:from-border-yellow hover:to-border-orange hover:bg-gradient-to-r hover:bg-cover hover:bg-no-repeat hover:bg-border-yellow hover:bg-opacity-100 hover:text-almost_black hover:font-semibold transition-all duration-700 text-white  py-2 px-4">
                    {label}
                </span>
            </button>
        </div>
    );
};

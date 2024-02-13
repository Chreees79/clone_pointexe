export const useValidation = () => {
    const handleEmailValidation = (value: string): boolean => {
        const emailRegex =
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return emailRegex.test(value);
    };
    const handleFieldValidation = (value: string): boolean => {
        const fieldRegex = /^.{1,1000}$/;
        return fieldRegex.test(value);
    };
    const handleNameValidation = (value: string): boolean => {
        const NameAndFirstNameRegex = /^[a-zA-ZÀ-ÿ\-']{1,50}$/;
        return NameAndFirstNameRegex.test(value);
    };

    return {
        handleEmailValidation,
        handleFieldValidation,
        handleNameValidation,
    };
};

export const toggleSelected = (
    index: number,
    activeIndex: number,
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>
) => {
    setActiveIndex(index === activeIndex ? activeIndex : index);
};

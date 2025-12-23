export const getNextCycle = (currentCycle: number) => {
    return [0, 8].includes(currentCycle) ? 1 : currentCycle + 1;
};

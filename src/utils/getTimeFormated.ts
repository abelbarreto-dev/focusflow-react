export const getTimeFormated = (timeSeconds: number) => {
    const minutes = String(Math.floor(timeSeconds / 60)).padStart(2, "0");
    const seconds = String(Math.floor(timeSeconds % 60)).padStart(2, "0");

    return `${minutes}:${seconds}`;
};

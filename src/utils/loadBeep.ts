import gravityBeep from "../assets/audios/gravitational_beep.mp3";

export const loadBeep = () => {
    const audio = new Audio(gravityBeep);
    audio.load();

    return () => {
        // safari
        audio.currentTime = 0;
        audio.play();
    };
};

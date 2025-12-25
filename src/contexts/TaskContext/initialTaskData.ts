import type { TaskStateModel } from "../../models/TaskStateModel";

export const initialTaskStateData: TaskStateModel = {
    tasks: [],
    secondsReamaining: 0,
    formatedSecondsRemaining: "00:00",
    activeTask: null,
    currentCycle: 0,
    config: {
        workTime: 1,
        shortBreakTime: 1,
        longBreakTime: 1,
    },
};

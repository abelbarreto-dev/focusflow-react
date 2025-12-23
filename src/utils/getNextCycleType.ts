import type { TaskModel } from "../models/TaskModel";

export const getNextCycleType = (currentCicle: number): TaskModel["type"] => {
    if (currentCicle % 8 === 0) return "longBreakTime";

    return currentCicle % 2 === 0 ? "shortBreakTime" : "workTime";
};

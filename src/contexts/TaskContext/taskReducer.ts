import type { TaskStateModel } from "../../models/TaskStateModel";
import { getNextCycle } from "../../utils/getNextCycle";
import { getTimeFormated } from "../../utils/getTimeFormated";
import { TaskActionTypes, type TaskActionModel } from "./taskActions";

export const taskReducer = (
    state: TaskStateModel,
    action: TaskActionModel,
): TaskStateModel => {
    const nextCycle = getNextCycle(state.currentCycle);

    switch (action.type) {
        case TaskActionTypes.START_TASK: {
            const taskModel = action.payload;
            const secondsReamaining = taskModel.duration * 60;
            return {
                ...state,
                activeTask: taskModel,
                currentCycle: nextCycle,
                secondsReamaining: secondsReamaining,
                formatedSecondsRemaining: getTimeFormated(secondsReamaining),
                tasks: [...state.tasks, taskModel],
            };
        }
        case TaskActionTypes.INTERRUPT_TASK: {
            return {
                ...state,
                activeTask: null,
                secondsReamaining: 0,
                formatedSecondsRemaining: "00:00",
                tasks: state.tasks.map((task) => {
                    if (task.id === state.activeTask?.id)
                        task.interruptDate = Date.now();
                    return task;
                }),
            }
        }
        default:
            return { ...state };
    }
};

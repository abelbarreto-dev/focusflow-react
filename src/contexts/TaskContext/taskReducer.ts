import type { TaskStateModel } from "../../models/TaskStateModel";
import { getNextCycle } from "../../utils/getNextCycle";
import { getTimeFormated } from "../../utils/getTimeFormated";
import { initialTaskStateData } from "./initialTaskData";
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
                tasks: state.tasks.map(task => {
                    if (task.id === state.activeTask?.id)
                        task.interruptDate = Date.now();
                    return task;
                }),
            };
        }
        case TaskActionTypes.THE_FINAL_COUNT_DOWN: {
            return {
                ...state,
                secondsReamaining: action.payload.secondsReamaining,
                formatedSecondsRemaining: getTimeFormated(
                    action.payload.secondsReamaining,
                ),
            };
        }
        case TaskActionTypes.COMPLETE_TASK: {
            return {
                ...state,
                activeTask: null,
                secondsReamaining: 0,
                formatedSecondsRemaining: "00:00",
                tasks: state.tasks.map(task => {
                    if (task.id === state.activeTask?.id)
                        task.completeDate = Date.now();
                    return task;
                }),
            };
        }
        case TaskActionTypes.CLEAR_STATE: {
            return {...initialTaskStateData};
        }
        default:
            return { ...state };
    }
};

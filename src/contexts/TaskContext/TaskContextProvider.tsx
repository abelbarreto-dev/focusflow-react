import { useEffect, useReducer } from "react";
import { initialTaskStateData } from "./initialTaskData";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerSingleton } from "../../workers/TimerWorkerSingleton";
import { TaskActionTypes } from "./taskActions";

type TaskContextProviderProps = { children: React.ReactNode };

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
    const [state, dispatch] = useReducer(taskReducer, initialTaskStateData);

    const worker = TimerWorkerSingleton.getInstance();

    worker.onmessage(event => {
        const countDownSeconds = event.data;

        if (countDownSeconds <= 0) {
            worker.terminate();

            dispatch({
                type: TaskActionTypes.COMPLETE_TASK,
            });
        } else {
            dispatch({
                type: TaskActionTypes.THE_FINAL_COUNT_DOWN,
                payload: { secondsReamaining: countDownSeconds },
            });
        }
    });

    useEffect(() => {
        if (!state.activeTask) {
            worker.terminate();
        }

        worker.postMessage(state);
    }, [worker, state]);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};

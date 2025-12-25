import { useEffect, useReducer, useRef } from "react";
import { initialTaskStateData } from "./initialTaskData";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerSingleton } from "../../workers/TimerWorkerSingleton";
import { TaskActionTypes } from "./taskActions";
import { loadBeep } from "../../utils/loadBeep";

type TaskContextProviderProps = { children: React.ReactNode };

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
    const [state, dispatch] = useReducer(taskReducer, initialTaskStateData);
    const playBeepRef = useRef<() => void | null>(null);

    const worker = TimerWorkerSingleton.getInstance();

    useEffect(() => {
        worker.onmessage(event => {
            const countDownSeconds = event.data;

            if (countDownSeconds <= 0) {
                if (playBeepRef.current) {
                    playBeepRef.current();
                    playBeepRef.current = null;
                }

                dispatch({
                    type: TaskActionTypes.COMPLETE_TASK,
                });

                worker.terminate();
            } else {
                if (playBeepRef.current) playBeepRef.current();
                dispatch({
                    type: TaskActionTypes.THE_FINAL_COUNT_DOWN,
                    payload: { secondsReamaining: countDownSeconds },
                });
            }
        });
    }, [worker]);

    useEffect(() => {
        if (!state.activeTask) {
            worker.terminate();
        }

        worker.postMessage(state);
    }, [worker, state]);

    useEffect(() => {
        if (state.activeTask && playBeepRef.current === null) {
            playBeepRef.current = loadBeep();
        }
        else {
            playBeepRef.current = null;
        }
    }, [state.activeTask]);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};

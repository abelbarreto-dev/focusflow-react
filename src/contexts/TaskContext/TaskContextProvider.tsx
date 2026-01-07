import { useEffect, useReducer, useRef } from "react";
import { initialTaskStateData } from "./initialTaskData";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerSingleton } from "../../workers/TimerWorkerSingleton";
import { TaskActionTypes } from "./taskActions";
import { loadBeep } from "../../utils/loadBeep";
import type { TaskStateModel } from "../../models/TaskStateModel";

type TaskContextProviderProps = { children: React.ReactNode };

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
    const [state, dispatch] = useReducer(taskReducer, initialTaskStateData, () => {
        const storageState = localStorage.getItem("state");

        if (!storageState) return initialTaskStateData;

        const parsedStorageState = JSON.parse(storageState) as TaskStateModel;

        return {
            ...parsedStorageState,
            activeTask: null,
            secondsReamaining: 0,
            formatedSecondsRemaining: "00:00",
        };
    });
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
            }
            else {
                dispatch({
                    type: TaskActionTypes.THE_FINAL_COUNT_DOWN,
                    payload: { secondsReamaining: countDownSeconds },
                });
            }
        });
    }, [worker]);

    useEffect(() => {
        localStorage.setItem("state", JSON.stringify(state));

        if (!state.activeTask) {
            worker.terminate();
            document.title = "FocusFlow";
        }
        else
            document.title = `${state.formatedSecondsRemaining} - FocusFlow`;

        worker.postMessage(state);
    }, [worker, state]);

    useEffect(() => {
        if (state.activeTask && playBeepRef.current === null) {
            playBeepRef.current = loadBeep();
        }
        else if (!state.activeTask) {
            playBeepRef.current = loadBeep();
            playBeepRef.current();
            playBeepRef.current = null;
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

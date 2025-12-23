import { createContext, useContext, useState } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";

const initialState: TaskStateModel = {
    tasks: [],
    secondsReamaining: 0,
    formatedSecondsRemaining: "00:00",
    activeTask: null,
    currentCycle: 0,
    config: {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime: 15,
    },
};

type TaskContextProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue: TaskContextProps = {
    state: initialState,
    setState: () => {},
};

const TaskContext = createContext(initialContextValue);

type TaskContextProviderProps = { children: React.ReactNode };

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
    const [state, setState] = useState<TaskStateModel>(initialState);

    return (
        <TaskContext.Provider value={{state, setState}}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => {
    return useContext(TaskContext);
};

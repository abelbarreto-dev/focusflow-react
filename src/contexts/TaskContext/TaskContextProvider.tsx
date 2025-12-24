import { useReducer, useState } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskStateData } from "./initialTaskData";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = { children: React.ReactNode };

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
    const [state, setState] = useState<TaskStateModel>(initialTaskStateData);

    const [numero, dispatch] = useReducer((state, action) => {
        switch(action) {
            case "INCREMENT": {
                return state + 1;
            }
        }

        return state;
    }, 0);

    return (
        <TaskContext.Provider value={{ state, setState }}>
            <h1>O Número é: {numero}</h1>
            <button onClick={() => dispatch("INCREMENT")}>Incrementar</button>
        </TaskContext.Provider>
    );
};

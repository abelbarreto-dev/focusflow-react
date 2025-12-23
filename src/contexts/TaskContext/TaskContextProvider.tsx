import { useEffect, useState } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskStateData } from "./initialTaskData";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = { children: React.ReactNode };

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
    const [state, setState] = useState<TaskStateModel>(initialTaskStateData);

    useEffect(() => { console.log(state) }, [state])

    return (
        <TaskContext.Provider value={{ state, setState }}>
            {children}
        </TaskContext.Provider>
    );
};

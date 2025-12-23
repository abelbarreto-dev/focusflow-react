import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskStateData } from "./initialTaskData";

type TaskContextProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue: TaskContextProps = {
    state: initialTaskStateData,
    setState: () => {},
};

export const TaskContext = createContext(initialContextValue);

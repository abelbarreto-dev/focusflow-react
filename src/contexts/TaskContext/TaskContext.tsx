import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskStateData } from "./initialTaskData";
import type { TaskActionModel } from "./taskActions";

type TaskContextProps = {
    state: TaskStateModel;
    dispatch: React.Dispatch<TaskActionModel>;
};

const initialContextValue: TaskContextProps = {
    state: initialTaskStateData,
    dispatch: () => {},
};

export const TaskContext = createContext(initialContextValue);

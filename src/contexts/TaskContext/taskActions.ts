import type { TaskModel } from "../../models/TaskModel"

export enum TaskActionTypes {
    START_TASK = "START_TASK",
    INTERRUPT_TASK = "INTERRUPT_TASK",
    MIRIAN = "MIRIAN",
};

export type TaskActionModel = {
    type: TaskActionTypes;
    payload: TaskModel;
};

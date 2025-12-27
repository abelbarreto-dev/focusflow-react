import type { TaskModel } from "../models/TaskModel";

type SortOpps = "task" | "duration" | "date" | "type";

export const getSortTasks = (
    tasks: TaskModel[],
    attrSort: SortOpps,
    reverse = false,
) => {
    if (!tasks || tasks.length === 0) return;

    const order = reverse ? -1 : 1;

    const compareString = (a: string, b: string) =>
        a.localeCompare(b, "pt-BR") * order;

    const compareNumber = (a: number, b: number) => (a - b) * order;

    return [...tasks].sort((a, b) => {
        switch (attrSort) {
            case "task":
                return compareString(a.name, b.name);
            case "type":
                return compareString(a.type, b.type);
            case "duration":
                return compareNumber(a.duration, b.duration);
            case "date":
                return compareNumber(a.startDate, b.startDate);
            default:
                return 0;
        }
    });
};

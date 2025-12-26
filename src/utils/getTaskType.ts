export const getTaskType = (task: "workTime" | "shortBreakTime" | "longBreakTime"): string => {
    return {
        workTime: "Foco",
        shortBreakTime: "Descanso Curto",
        longBreakTime: "Descanso Longo",
    }[task];
};

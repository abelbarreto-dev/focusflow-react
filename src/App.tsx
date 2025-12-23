import { useState } from "react";
import { Home } from "./pages/Home";
import type { TaskStateModel } from "./models/TaskStateModel";

import "./styles/theme.css";
import "./styles/global.css";

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

export const App = () => {
    const [state, setState] = useState<TaskStateModel>(initialState);

    return <Home state={state} setState={setState} />;
};

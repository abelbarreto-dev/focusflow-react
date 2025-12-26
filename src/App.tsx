import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { Toastify } from "./components/Toastify";
import { MainRouter } from "./components/MainRouter";

import "./styles/theme.css";
import "./styles/global.css";

export const App = () => (
    <TaskContextProvider>
        <MainRouter />
        <Toastify />
    </TaskContextProvider>
);

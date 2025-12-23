import { Home } from "./pages/Home";

import "./styles/theme.css";
import "./styles/global.css";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";

export const App = () => (
    <TaskContextProvider>
        <Home />
    </TaskContextProvider>
);

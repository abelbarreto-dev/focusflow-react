import { BrowserRouter, Route, Routes } from "react-router";

import { Home } from "./pages/Home";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { Toastify } from "./components/Toastify";

import "./styles/theme.css";
import "./styles/global.css";
import { NotFound } from "./pages/NotFound";
import { AboutPomodoro } from "./pages/AboutPomodoro";

export const App = () => (
    <TaskContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-pomodoro" element={<AboutPomodoro />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
        <Toastify />
    </TaskContextProvider>
);

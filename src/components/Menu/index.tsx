import {
    HistoryIcon,
    HomeIcon,
    MoonIcon,
    SettingsIcon,
    SunIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

import styles from "./styles.module.css";

type Themes = "dark" | "light";

export const Menu = () => {
    const [theme, setTheme] = useState<Themes>("dark");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);

        // prevent unstaged data from last running
        return () => {};
    }, [theme]);

    const handleChangeTheme = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) => {
        event.preventDefault();

        setTheme(color => (color === "dark" ? "light" : "dark"));
    };

    return (
        <nav className={styles.menu}>
            <a href="" className={styles.menu_link} title="Inicio">
                <HomeIcon />
            </a>

            <a href="" className={styles.menu_link} title="Histórico">
                <HistoryIcon />
            </a>

            <a href="" className={styles.menu_link} title="Configurações">
                <SettingsIcon />
            </a>

            <a
                href=""
                className={styles.menu_link}
                title="Mudar Tema"
                onClick={handleChangeTheme}
            >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </a>
        </nav>
    );
};

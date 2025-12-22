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
    const [theme, setTheme] = useState<Themes>(() => {
        const storageTheme = (localStorage.getItem("data-theme") ||
            "dark") as Themes;
        return storageTheme;
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);

        // store to local browser "db"
        localStorage.setItem("data-theme", theme);
    }, [theme]);

    const handleChangeTheme = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) => {
        event.preventDefault();

        setTheme(color => (color === "dark" ? "light" : "dark"));
    };

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />,
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
                {nextThemeIcon[theme]}
            </a>
        </nav>
    );
};

import {
    HistoryIcon,
    HomeIcon,
    MoonIcon,
    SettingsIcon,
    SunIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

import styles from "./styles.module.css";
import { Link } from "react-router";

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
            <Link to="/" className={styles.menu_link} title="Inicio">
                <HomeIcon />
            </Link>

            <Link to="/history" className={styles.menu_link} title="Histórico">
                <HistoryIcon />
            </Link>

            <Link to="/settings" className={styles.menu_link} title="Configurações">
                <SettingsIcon />
            </Link>

            <Link
                to=""
                className={styles.menu_link}
                title="Mudar Tema"
                onClick={handleChangeTheme}
            >
                {nextThemeIcon[theme]}
            </Link>
        </nav>
    );
};

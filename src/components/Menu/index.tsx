import {
    HistoryIcon,
    HomeIcon,
    MoonIcon,
    SettingsIcon,
    SunIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

import { RouterLink } from "../RouterLink";

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
            <RouterLink
                href="/"
                className={styles.menu_link}
                title="Inicio"
                aria-label="Inicio"
            >
                <HomeIcon />
            </RouterLink>

            <RouterLink
                href="/history"
                className={styles.menu_link}
                title="Histórico"
                aria-label="Histórico"
            >
                <HistoryIcon />
            </RouterLink>

            <RouterLink
                href="/settings"
                className={styles.menu_link}
                title="Configurações"
                aria-label="Configurações"
            >
                <SettingsIcon />
            </RouterLink>

            <RouterLink
                href=""
                className={styles.menu_link}
                title="Mudar Tema"
                aria-label="Mudar Tema"
                onClick={handleChangeTheme}
            >
                {nextThemeIcon[theme]}
            </RouterLink>
        </nav>
    );
};

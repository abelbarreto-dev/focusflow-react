import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";

export const Menu = () => (
    <nav className={styles.menu}>
        <a href="" className={styles.menu_link}>
            <HomeIcon />
        </a>

        <a href="" className={styles.menu_link}>
            <HistoryIcon />
        </a>

        <a href="" className={styles.menu_link}>
            <SettingsIcon />
        </a>

        <a href="" className={styles.menu_link}>
            <SunIcon />
        </a>
    </nav>
);

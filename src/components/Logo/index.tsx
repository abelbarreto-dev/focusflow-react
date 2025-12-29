import { TimerIcon } from "lucide-react";
import styles from "./styles.module.css";
import { RouterLink } from "../RouterLink";

export const Logo = () => (
    <div className={styles.logo}>
        <RouterLink href="/" className={styles.logo_link}>
            <TimerIcon/>
            <span>FocusFlow</span>
        </RouterLink>
    </div>
);

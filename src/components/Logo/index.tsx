import { TimerIcon } from "lucide-react";
import styles from "./styles.module.css";
import { Link } from "../Link";

export const Logo = () => (
    <div className={styles.logo}>
        <Link to="/" className={styles.logo_link}>
            <TimerIcon/>
            <span>Chronos</span>
        </Link>
    </div>
);

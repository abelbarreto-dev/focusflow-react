import { useTaskContext } from "../../contexts/TaskContext";
import styles from "./styles.module.css";

export const CountDown = () => {
    const { state } = useTaskContext();

    return <h1 className={styles.count_down}>{state.formatedSecondsRemaining}</h1>;
};

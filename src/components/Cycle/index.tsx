import styles from "./styles.module.css";

type CycleTypes = {
    typeCycle: "workTime" | "shortBreakTime" | "longBreakTime";
}

export const Cycle = (
    { typeCycle }: CycleTypes
) => {
    const color = {
        "workTime": styles.play,
        "shortBreakTime": styles.rest,
        "longBreakTime": styles.long_rest
    }[typeCycle];

    return (
        <div className={`${styles.cycle} ${color}`}>
            <span>Ciclos:</span>
            <div className={styles.cycle_dots}>
                <span className={`${styles.cycle_dot} ${styles.work_time}`}></span>
                <span className={`${styles.cycle_dot} ${styles.rest_time}`}></span>
                <span className={`${styles.cycle_dot} ${styles.work_time}`}></span>
                <span className={`${styles.cycle_dot} ${styles.rest_time}`}></span>
                <span className={`${styles.cycle_dot} ${styles.work_time}`}></span>
                <span className={`${styles.cycle_dot} ${styles.rest_time}`}></span>
                <span className={`${styles.cycle_dot} ${styles.work_time}`}></span>
                <span className={`${styles.cycle_dot} ${styles.long_rest_time}`}></span>
            </div>
        </div>
    );
};

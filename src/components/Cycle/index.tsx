import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import styles from "./styles.module.css";

export const Cycle = () => {
    const { state } = useTaskContext();

    const cycleStep = Array.from({ length: state.currentCycle });

    const explain = {
        workTime: "Indicador de Foco",
        shortBreakTime: "Indicador de Descanso Curto",
        longBreakTime: "Indicador de Descanso Longo",
    };

    return (
        <div className={styles.cycle}>
            <span>Ciclos:</span>
            <div className={styles.cycle_dots}>
                {cycleStep.map((_, index) => {
                    const nextCycle = getNextCycle(index);
                    const nextCycleType = getNextCycleType(nextCycle);

                    return (
                        <span
                            key={`${nextCycleType}_${nextCycle}`}
                            aria-label={explain[nextCycleType]}
                            title={explain[nextCycleType]}
                            className={`${styles.cycle_dot} ${styles[nextCycleType]}`}
                        ></span>
                    );
                })}
            </div>
        </div>
    );
};

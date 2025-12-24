import { PlayCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycle } from "../Cycle";
import { InputText } from "../InputText";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import type { TaskModel } from "../../models/TaskModel";

import styles from "./styles.module.css";
import { getTimeFormated } from "../../utils/getTimeFormated";

export const Form = () => {
    const { state, setState } = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null);

    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    const handleStartPomodoro = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!taskNameInput.current) return;

        const taskName = taskNameInput.current.value.trim();

        if (!taskName) {
            alert("Digite o nome da tarefa");
            return;
        }

        const taskModel: TaskModel = {
            id: Date.now(),
            name: taskName,
            startDate: Date.now(),
            duration: state.config[nextCycleType],
            completeDate: null,
            interruptDate: null,
            type: nextCycleType,
            status: "Iniciado",
        };

        const secondsReamaining = taskModel.duration * 60;

        setState(prev => {
            return {
                ...prev,
                config: { ...prev.config },
                activeTask: taskModel,
                currentCycle: nextCycle,
                secondsReamaining: secondsReamaining, // to check
                formatedSecondsRemaining: getTimeFormated(secondsReamaining),
                tasks: [...prev.tasks, taskModel],
            };
        });
    };

    return (
        <form
            onSubmit={handleStartPomodoro}
            action="POST"
            className={styles.form}
        >
            <div className={styles.form_row}>
                <InputText
                    id="task-name"
                    labelText="Tarefa:"
                    ref={taskNameInput}
                />
            </div>

            <div className={styles.form_row}>
                <p>
                    Nesse ciclo <strong>descanse</strong> por{" "}
                    <strong>5 min.</strong>
                </p>
            </div>

            {state.currentCycle !== 0 && (
                <div className={styles.form_row}>
                    <Cycle />
                </div>
            )}

            <div className={styles.form_row}>
                <Button id="form-btn" icon={<PlayCircleIcon />} />
            </div>
        </form>
    );
};

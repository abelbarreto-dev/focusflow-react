import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycle } from "../Cycle";
import { InputText } from "../InputText";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { Tips } from "../Tips";
import type { TaskModel } from "../../models/TaskModel";

import styles from "./styles.module.css";

export const Form = () => {
    const { state, dispatch } = useTaskContext();
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

        dispatch({
            type: TaskActionTypes.START_TASK,
            payload: taskModel,
        });
    };

    const handleStopPomodoro = () => {
        dispatch({
            type: TaskActionTypes.INTERRUPT_TASK,
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
                    disabled={!!state.activeTask}
                />
            </div>

            <div className={styles.form_row}>
                <Tips />
            </div>

            {state.currentCycle !== 0 && (
                <div className={styles.form_row}>
                    <Cycle />
                </div>
            )}

            <div className={styles.form_row}>
                {!state.activeTask ? (
                    <Button
                        key="form-btn-start"
                        id="form-btn-start"
                        ariaLabel="Iniciar Nova Tarefa"
                        title="Iniciar Nova Tarefa"
                        type="submit"
                        icon={<PlayCircleIcon />}
                        color="green"
                    />
                ) : (
                    <Button
                        key="form-btn-stop"
                        id="form-btn-stop"
                        ariaLabel="Interromper Tarefa"
                        title="Interromper Tarefa"
                        type="button"
                        icon={<StopCircleIcon />}
                        color="red"
                        onClick={handleStopPomodoro}
                    />
                )}
            </div>
        </form>
    );
};

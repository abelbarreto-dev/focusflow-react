import { PlayCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycle } from "../Cycle";
import { InputText } from "../InputText";
import type { TaskStateModel } from "../../models/TaskStateModel";
import styles from "./styles.module.css";

type FormProps = {
    state: TaskStateModel;
    setState: (state: TaskStateModel) => void;
};

export const Form = ({ state, setState }: FormProps) => {
    return (
        <form action="" className={styles.form}>
            <div className={styles.form_row}>
                <InputText id="task-name" labelText="Tarefa:" />
            </div>

            <div className={styles.form_row}>
                <p>
                    Nesse ciclo <strong>descanse</strong> por{" "}
                    <strong>{state.config.shortBreakTime} min.</strong>
                </p>
            </div>

            <div className={styles.form_row}>
                <Cycle typeCycle="long-rest" />
            </div>

            <div className={styles.form_row}>
                <Button id="form-btn" icon={<PlayCircleIcon />} />
            </div>
        </form>
    );
};

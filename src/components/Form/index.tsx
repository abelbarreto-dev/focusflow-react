import { PlayCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycle } from "../Cycle";
import { InputText } from "../InputText";
import styles from "./styles.module.css";

export const Form = () => {
    return (
        <form action="" className={styles.form}>
            <div className={styles.form_row}>
                <InputText id="task-name" labelText="Tarefa:"/>
            </div>

            <div className={styles.form_row}>
                <p>
                    Nesse ciclo <strong>descanse</strong> por{" "}
                    <strong>5 min.</strong>
                </p>
            </div>

            <div className={styles.form_row}>
                <Cycle typeCycle="long-rest" />
            </div>

            <div className={styles.form_row}>
                <Button id="form-btn" icon={<PlayCircleIcon />}/>
            </div>
        </form>
    );
};

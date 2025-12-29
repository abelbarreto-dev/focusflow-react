import { PageTemplate } from "../../templates/PageTemplate";
import { Container } from "../../components/Container/index";
import { Heading } from "../../components/Heading";

import { Button } from "../../components/Button";
import { SaveIcon } from "lucide-react";

import styles from "./styles.module.css";
import { InputNumber } from "../../components/InputNumber";
import { useEffect, useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { showMessage } from "../../adapters/showMessage";

export const Settings = () => {
    const { state, dispatch } = useTaskContext();

    const workTime = useRef<HTMLInputElement>(null);
    const shortBreakTime = useRef<HTMLInputElement>(null);
    const longBreakTime = useRef<HTMLInputElement>(null);

    useEffect(() => {
        document.title = "Configurações";
    }, []);

    const handleUpdatePomodoro = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const config = {
            workTime: workTime.current?.valueAsNumber,
            shortBreakTime: shortBreakTime.current?.valueAsNumber,
            longBreakTime: longBreakTime.current?.valueAsNumber,
        };

        if (Object.values(config).includes(NaN)) {
            showMessage.dismiss();
            showMessage.warning("Preencha todos os valores!");
            return;
        }

        const newState: TaskStateModel = {
            ...state,
            config: {
                workTime: config.workTime || 0,
                shortBreakTime: config.shortBreakTime || 0,
                longBreakTime: config.longBreakTime || 0,
            },
        };

        localStorage.setItem("state", JSON.stringify(newState));

        dispatch({
            type: TaskActionTypes.REFLASH_TASK,
            payload: newState.config,
        });

        showMessage.dismiss();
        showMessage.success("Tempo do Pomodoro Atualizado!");
    };

    return (
        <PageTemplate>
            <Container>
                <Heading>Configurações</Heading>
            </Container>

            <Container>
                <p style={{ textAlign: "center" }}>
                    Modifique as configurações para tempo de foco, descando
                    curso e descanso longo.
                </p>
            </Container>

            <Container>
                <form
                    action=""
                    onSubmit={handleUpdatePomodoro}
                    className={styles.formSettings}
                >
                    <div className={styles.formSettingsRow}>
                        <InputNumber
                            id={"workTime"}
                            labelText={"Tempo de Foco"}
                            placeHolder={"Minutes"}
                            ref={workTime}
                            defaultValue={state.config.workTime}
                        />
                    </div>

                    <div className={styles.formSettingsRow}>
                        <InputNumber
                            id={"shortBreakTime"}
                            labelText={"Descanso Curto"}
                            placeHolder={"Minutes"}
                            ref={shortBreakTime}
                            defaultValue={state.config.shortBreakTime}
                        />
                    </div>

                    <div className={styles.formSettingsRow}>
                        <InputNumber
                            id={"longBreakTime"}
                            labelText={"Descanso Curto"}
                            placeHolder={"Minutes"}
                            ref={longBreakTime}
                            defaultValue={state.config.longBreakTime}
                        />
                    </div>

                    <div className={styles.formSettingsRow}>
                        <Button
                            id={"button-save"}
                            type={"submit"}
                            icon={<SaveIcon />}
                            ariaLabel={"Salvar Configurações"}
                            title={"Salvar Configurações"}
                        />
                    </div>
                </form>
            </Container>
        </PageTemplate>
    );
};

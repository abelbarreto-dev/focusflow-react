import { PageTemplate } from "../../templates/PageTemplate";
import { Container } from "../../components/Container/index";
import { Heading } from "../../components/Heading";

import { Button } from "../../components/Button";
import { SaveIcon } from "lucide-react";

import styles from "./styles.module.css";
import { InputNumber } from "../../components/InputNumber";
import { useState } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export const Settings = () => {
    const { state } = useTaskContext();

    const [workTime, setWorkTime] = useState<number>(state.config.workTime);
    const [shortBreakTime, setShortBreakTime] = useState<number>(
        state.config.shortBreakTime,
    );
    const [longBreakTime, setLongBreakTime] = useState<number>(
        state.config.longBreakTime,
    );

    const updateWorkTimeValue = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const valueStr = event.target.value;

        if (!valueStr) return;

        const value = parseInt(valueStr);

        setWorkTime(value);
    };

    const updateShortBreakTimeValue = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const valueStr = event.target.value;

        if (!valueStr) return;

        const value = parseInt(valueStr);

        setShortBreakTime(value);
    };

    const updateLongBreakTimeValue = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const valueStr = event.target.value;

        if (!valueStr) return;

        const value = parseInt(valueStr);

        setLongBreakTime(value);
    };

    const handleUpdatePomodoro = () => {
        const newState = {
            ...state,
            config: {
                workTime: workTime,
                shortBreakTime: shortBreakTime,
                longBreakTime: longBreakTime,
            },
        };

        localStorage.setItem("state", JSON.stringify(newState));
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
                <form action="" onSubmit={handleUpdatePomodoro} className={styles.formSettings}>
                    <div className={styles.formSettingsRow}>
                        <InputNumber
                            id={"workTime"}
                            labelText={"Tempo de Foco"}
                            placeHolder={"Minutes"}
                            value={workTime}
                            onChange={updateWorkTimeValue}
                        />
                    </div>

                    <div className={styles.formSettingsRow}>
                        <InputNumber
                            id={"shortBreakTime"}
                            labelText={"Descanso Curto"}
                            placeHolder={"Minutes"}
                            value={shortBreakTime}
                            onChange={updateShortBreakTimeValue}
                        />
                    </div>

                    <div className={styles.formSettingsRow}>
                        <InputNumber
                            id={"longBreakTime"}
                            labelText={"Descanso Curto"}
                            placeHolder={"Minutes"}
                            value={longBreakTime}
                            onChange={updateLongBreakTimeValue}
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

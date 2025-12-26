import { TrashIcon } from "lucide-react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { Heading } from "../../components/Heading";
import { PageTemplate } from "../../templates/PageTemplate";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";

import styles from "./styles.module.css";
import { getTaskType } from "../../utils/getTaskType";
import { getFormatDate } from "../../utils/getFormatDate";
import { getTaskStatus } from "../../utils/getTaskSratus";

export const History = () => {
    const { state } = useTaskContext();

    return (
        <PageTemplate>
            <Container>
                <Heading>
                    <span>Histórico</span>
                    <span className={styles.buttonContainer}>
                        <Button
                            id={"history-clear"}
                            type={"button"}
                            ariaLabel={"Limpar Todo o Histórico"}
                            title={"Limpar Todo o Histórico"}
                            icon={<TrashIcon />}
                            color={"red"}
                        />
                    </span>
                </Heading>
            </Container>

            <Container>
                <div className={styles.resposiveTable}>
                    <table>
                        <thead>
                            <tr>
                                <th>Tarefa</th>
                                <th>Duração</th>
                                <th>Data</th>
                                <th>Status</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.tasks.map(task => {
                                return (<tr key={`task-${task.id}`}>
                                    <td>{task.name}</td>
                                    <td>{task.duration}min</td>
                                    <td>{getFormatDate(task.startDate)}</td>
                                    <td>{getTaskStatus(task, state.activeTask)}</td>
                                    <td>{getTaskType(task.type)}</td>
                                </tr>);
                            })}
                        </tbody>
                    </table>
                </div>
            </Container>
        </PageTemplate>
    );
};

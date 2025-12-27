import { TrashIcon } from "lucide-react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { Heading } from "../../components/Heading";
import { PageTemplate } from "../../templates/PageTemplate";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";

import { getTaskType } from "../../utils/getTaskType";
import { getFormatDate } from "../../utils/getFormatDate";
import { getTaskStatus } from "../../utils/getTaskSratus";
import { useState } from "react";
import { getSortTasks } from "../../utils/getSortTasks";

import styles from "./styles.module.css";

export const History = () => {
    const { state } = useTaskContext();
    const [reverse, setReverse] = useState<boolean>(true);
    const [sortTasks, setSortTasks] = useState(() =>
        getSortTasks(state.tasks, "date", true),
    );

    const handleSortTask = (column: "task" | "duration" | "date" | "type") => {
        const revert = !reverse;

        const data = getSortTasks(sortTasks || [], column, revert);

        setReverse(revert);

        setSortTasks(data);
    };

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
                                <th
                                    className={styles.thSort}
                                    onClick={() => handleSortTask("task")}
                                >
                                    Tarefa ↕
                                </th>
                                <th
                                    className={styles.thSort}
                                    onClick={() => handleSortTask("duration")}
                                >
                                    Duração ↕
                                </th>
                                <th
                                    className={styles.thSort}
                                    onClick={() => handleSortTask("date")}
                                >
                                    Data ↕
                                </th>
                                <th className={styles.thSort}>Status</th>
                                <th
                                    className={styles.thSort}
                                    onClick={() => handleSortTask("type")}
                                >
                                    Tipo ↕
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortTasks &&
                                sortTasks.map(task => {
                                    return (
                                        <tr key={`task-${task.id}`}>
                                            <td>{task.name}</td>
                                            <td>{task.duration}min</td>
                                            <td>
                                                {getFormatDate(task.startDate)}
                                            </td>
                                            <td>
                                                {getTaskStatus(
                                                    task,
                                                    state.activeTask,
                                                )}
                                            </td>
                                            <td>{getTaskType(task.type)}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </Container>
        </PageTemplate>
    );
};

import { useEffect, useState } from "react";
import { TrashIcon } from "lucide-react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { Heading } from "../../components/Heading";
import { PageTemplate } from "../../templates/PageTemplate";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";

import { getTaskType } from "../../utils/getTaskType";
import { getFormatDate } from "../../utils/getFormatDate";
import { getTaskStatus } from "../../utils/getTaskSratus";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { getSortTasks } from "../../utils/getSortTasks";

import { showMessage } from "../../adapters/showMessage";
import styles from "./styles.module.css";

export const History = () => {
    const { state, dispatch } = useTaskContext();
    const [reverse, setReverse] = useState<boolean>(true);
    const [sortTasks, setSortTasks] = useState(() =>
        getSortTasks(state.tasks, "date", true),
    );
    const [reload, setReload] = useState<boolean>(false);

    useEffect(() => {
        document.title = "Histórico Pomodoro";
    }, []);

    useEffect(() => {
        return () => {
            showMessage.dismiss();
            setReload(false);
        };
    }, [reload]);

    const closeComponent = (reason: boolean) => {
        setReload(reason);

        if (reason) {
            dispatch({ type: TaskActionTypes.CLEAR_STATE });

            const data = getSortTasks([], "date", true);

            setSortTasks(data);

            setReload(!reload);
        }
    };

    const handleSortTask = (column: "task" | "duration" | "date" | "type") => {
        const revert = !reverse;

        const data = getSortTasks(sortTasks || [], column, revert);

        setReverse(revert);

        setSortTasks(data);
    };

    const handleClearHistory = () => {
        showMessage.dismiss();
        showMessage.confirm("Tem Certeza?", closeComponent);
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
                            onClick={handleClearHistory}
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

import { TrashIcon } from "lucide-react";
import { Heading } from "../../components/Heading";
import { PageTemplate } from "../../templates/PageTemplate";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";

import styles from "./styles.module.css";

export const History = () => {
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
                            {Array.from({ length: 20 }).map((_, index) => {
                                return (
                                    <tr key={`line-table_${index}`}>
                                        <td>nome_{index + 1}</td>
                                        <td>nome_{index + 1}</td>
                                        <td>nome_{index + 1}</td>
                                        <td>nome_{index + 1}</td>
                                        <td>nome_{index + 1}</td>
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

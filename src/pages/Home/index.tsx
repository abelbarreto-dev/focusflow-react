import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { Form } from "../../components/Form";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { PageTemplate } from "../../templates/PageTemplate";

type HomeProps = {
    state: TaskStateModel;
    setState: (state: TaskStateModel) => void;
};

export const Home = (
    { state, setState }: HomeProps
) => {
    return (
        <PageTemplate>
            <CountDown>{state.formatedSecondsRemaining}</CountDown>

            <Container>
                <Form {...{state, setState}} />
            </Container>
        </PageTemplate>
    );
};

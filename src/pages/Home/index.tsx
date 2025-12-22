import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { Form } from "../../components/Form";
import { PageTemplate } from "../../templates/PageTemplate";

export const Home = () => {
    return (
        <PageTemplate>
            <CountDown>00:00</CountDown>

            <Container>
                <Form />
            </Container>
        </PageTemplate>
    );
};

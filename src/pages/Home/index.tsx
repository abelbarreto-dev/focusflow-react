import { useEffect } from "react";
import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { Form } from "../../components/Form";
import { PageTemplate } from "../../templates/PageTemplate";

export const Home = () => {
    useEffect(() => {
        document.title = "FocusFlow";
    }, []);

    return (
        <PageTemplate>
            <CountDown />

            <Container>
                <Form />
            </Container>
        </PageTemplate>
    );
};

import { Fragment } from "react/jsx-runtime";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";

import "./styles/theme.css";
import "./styles/global.css"
import { Form } from "./components/Form";

export function App() {
    return (
        <Fragment>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            <CountDown>
                00:00
            </CountDown>

            <Container>
                <Form />
            </Container>
        </Fragment>
    );
}

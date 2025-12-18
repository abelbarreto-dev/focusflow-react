import { Fragment } from "react/jsx-runtime";

import "./styles/theme.css";
import "./styles/global.css";
import { TimerIcon } from "lucide-react";
import { Container } from "./components/Container";
import { Heading } from "./components/Heading";

export function App() {
    return (
        <Fragment>
            <Container>
                <Heading>LOGO</Heading>
            </Container>

            <Container>
                <Heading>MENU</Heading>
            </Container>
        </Fragment>
    );
}

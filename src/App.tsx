import { Fragment } from "react/jsx-runtime";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

import "./styles/theme.css";
import "./styles/global.css"

export function App() {
    return (
        <Fragment>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>
        </Fragment>
    );
}

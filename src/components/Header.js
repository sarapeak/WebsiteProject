import {StyledHeader, Nav, Logo} from "./styles/Header.styled"
import {Container} from "./styles/Container.styled"
import {Button} from "./styles/Button.styled"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='./images/Team-Logo.png' alt='' />
                    <Button>
                        <Link to="/findanagent">Find an Agent</Link>
                    </Button>
                </Nav>
            </Container>
        </StyledHeader>
    )
}
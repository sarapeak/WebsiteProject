import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { StyledFooter } from "./styles/Footer.styled"
import SocialIcons from "./SocialIcons"
import { Pic } from "./styles/Footer.styled"

export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <Pic src="./images/square-logo.png" alt="" />

                <Flex>
                    <ul>
                        <li>
                            1916 W. Chapman Ave, Orange, CA 92686
                        </li>
                        <li>+1-234-567-8910</li>
                        <li>teammarylou@gmail.com</li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>
                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                    <SocialIcons />
                </Flex>

                <p>&copy; 2022 Team Mary Lou Adame Martinez. All rights reserved</p>
            </Container>
        </StyledFooter>
    )
}
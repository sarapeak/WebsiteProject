import { StyledBody, StyledButton, Header, StyledScroll, Area, Scroll, Cover, ScrollImages, Child } from "./styles/Body.styled"
import { Button } from "./styles/Button.styled"
import { Container } from "./styles/Container.styled"

export default function Body() {
    return (
        <StyledBody>
            <Container>
                <StyledButton>
                    <Button bg='#fff'>Find an Agent</Button>
                    <Button bg='#fff'>Look at Listings</Button>
                </StyledButton>

                <Header>
                    <h2>Homes for Sale</h2>
                </Header>

                <StyledScroll>
                    <Area>
                        <Scroll>
                            <Cover>
                                <ScrollImages>
                                    <Child>
                                        <img src='./images/Photo1.jpg' alt='' />
                                        <img src='./images/Photo2.jpg' alt='' />
                                        <img src='./images/Photo3.jpg' alt='' />
                                        <img src='./images/Photo4.jpg' alt='' />
                                        <img src='./images/Photo4.jpg' alt='' />
                                        <img src='./images/Photo4.jpg' alt='' />
                                        <img src='./images/Photo4.jpg' alt='' />
                                        <img src='./images/Photo4.jpg' alt='' />
                                    </Child>
                                </ScrollImages>
                            </Cover>
                        </Scroll>
                    </Area>
                </StyledScroll>
            </Container>
        </StyledBody>
    )
}
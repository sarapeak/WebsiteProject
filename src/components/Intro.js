import { StyledIntro, Image } from "./styles/Intro.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";
import { Link } from "react-router-dom";

export default function Intro() {
    return (
        <StyledIntro>
            <Container>
                <Flex>
                    <div>
                        <h1>
                            Find The Place You Can Call Home
                        </h1>
                        <p>
                            Welcome to the home website of Team Mary Lou Real Estate! 
                            We are a team of agents dedicated to the buying and selling of 
                            properties both commercial and residential. If you are looking for 
                            a place to call home or a new building to start or grow your business, 
                            you have come to the right place! We are here to serve you!
                        </p>

                        <Button bg='#fff'>
                            <Link to="/meettheteam"> Meet the Team </Link>
                        </Button>
                    </div>

                    <Image src='./images/Team-Photo.JPG' alt='' />
                </Flex>
            </Container>
        </StyledIntro>
    );
}
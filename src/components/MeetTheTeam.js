import { ThemeProvider } from 'styled-components'
import Header from './Header'
import { GlobalStyles } from './styles/Global'
import Footer from './Footer'
import Card from './Card'
import { Container } from './styles/Container.styled'
import { StyledBody } from './styles/Body.styled'
import content from '../content'

const theme = {
  colors: {
    header: '#fff',
    body: '#F8BC24'
  },
  mobile: '768px',
}

export default function MeetTheTeam() {
    return(
        <ThemeProvider theme = {theme}>
            <>
                <GlobalStyles />
                <Header />
                <Container>
                    <StyledBody>
                        {content.map((item, index) => (
                            <Card key={index} item={item} />
                        ))}
                    </StyledBody>
                </Container>
                <Footer />
            </>
        </ThemeProvider>
    );
}
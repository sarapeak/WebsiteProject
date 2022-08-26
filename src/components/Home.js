import { ThemeProvider } from 'styled-components'
import Header from './Header'
import { GlobalStyles } from './styles/Global'
import Footer from './Footer'
import Intro from './Intro'
import Body from './Body'

const theme = {
  colors: {
    header: '#fff',
    body: '#F58800',
    intro: '#F8BC24'
  },
  mobile: '768px',
}

export default function Home() {
    return(
        <ThemeProvider theme = {theme}>
            <>
                <GlobalStyles />
                <Header />
                <Intro />
                <Body />
                <Footer />
            </>
        </ThemeProvider>
    );
}
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./styles/Global"
import Header from "./Header"

const theme = {
    colors: {
      header: '#fff',
      body: '#F58800',
      intro: '#F8BC24'
    },
    mobile: '768px',
  }

export default function FindanAgent () {
    return (
        <ThemeProvider theme = {theme}>
            <>
                <GlobalStyles>
                    <Header />
                </GlobalStyles>
            </>
        </ThemeProvider>
    )
}
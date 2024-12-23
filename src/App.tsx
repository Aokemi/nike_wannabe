import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";
import HeaderComponent from "./Components/Header/Header";
import Hero from "./Components/HeroSection/HeroSection";


function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
            <div>
              <HeaderComponent />
              <Hero />
            </div>
      </>
    </ThemeProvider>
  )
}

export default App

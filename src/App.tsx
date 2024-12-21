import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";
import HeaderComponent from "./Components/Header/Header";


function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
            <div>
              <HeaderComponent />
            </div>
      </>
    </ThemeProvider>
  )
}

export default App

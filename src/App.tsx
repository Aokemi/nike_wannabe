import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";
import HeaderComponent from "./Components/Header/Header";
import Hero from "./Components/HeroSection/HeroSection";
import Footer from "./Components/Footer/Footer";
import ProductSection from "./Components/Products/Products";


function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
            <div>
              <HeaderComponent />
              <Hero />
              <ProductSection />
              <Footer />
            </div>
      </>
    </ThemeProvider>
  )
}

export default App

import { theme } from "./styles/Theme";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import GlobalStyles from "./styles/GlobalStyle";
import { Container } from "./styles/Container.style";
import Card from "./components/Card";
import content from "./content";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Navbar />
      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>
    </ThemeProvider>
  );
}

export default App;

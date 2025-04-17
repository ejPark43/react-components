import Homepage from "./pages/Homepage";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Homepage />
    </ThemeProvider>
  );
}

export default App;

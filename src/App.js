import React from "react";
import { Provider } from 'react-redux';
import { store } from "./store/store"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import 'bootstrap/dist/css/bootstrap.min.css'
import Rotas from "./Routes";
import { BrowserRouter as Router} from 'react-router-dom';


const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const App = () => (
  <Router>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Rotas />
      </ThemeProvider>
    </Provider>
  </Router>
)

export default App;

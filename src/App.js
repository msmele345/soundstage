import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import './App.css';
import LandingPage from "./components/LandingPage";


const App = () => {

    const theme = createMuiTheme({palette: {type: "dark"}});

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="App">
                <h1 className={"banner"} >Soundstage</h1>
                <LandingPage/>
            </div>
        </ThemeProvider>
    );
}

export default App;

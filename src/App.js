import {ThemeProvider, createTheme} from '@material-ui/core/styles'
import './App.css';
import LandingPage from "./components/LandingPage";


const App = () => {

    const theme = createTheme({palette: {type: "dark"}});

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <h1 className={"banner"} >Soundstage</h1>
                <LandingPage/>
            </div>
        </ThemeProvider>
    );
}

export default App;

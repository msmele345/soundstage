import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainStage from "./MainStage";

export const NoMatch = ({location}) => <h3>No match for <code>{location.pathname}</code></h3>

class LandingPage extends React.Component {

    renderRoutes = () => {
        return <div className={"container"} >
            <Switch>
                <Route exact path={"/"} component={MainStage}/>
                <Route component={NoMatch}/>
            </Switch>
        </div>
    }

    render() {
        return (
            <div >
                <Router>
                    {/*<Header/>*/}
                    {this.renderRoutes()}
                </Router>
            </div>
        )
    }
}

export default LandingPage;
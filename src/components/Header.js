import React, {Component} from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {

    active = {
        fontWeight: "bold",
        color: "#0EABA0"
    };

    header = {
        display: "flex",
        justifyContent: "space-evenly",
        listStyle: "none",
        color: "white"

    };

    render() {
        return (
            <div style={this.header} className={"header"}>

                <NavLink exact to="/main" activeStyle={this.active}>
                    Main Stage
                </NavLink>
                <NavLink exact to="/shows" activeStyle={this.active}>
                    Shows
                </NavLink>
            </div>
        );
    }
}

export default Header;
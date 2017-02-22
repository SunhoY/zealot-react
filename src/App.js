import React, {Component} from "react";
import "./App.css";
import Landing from "./component/Landing";

class App extends Component {
    render() {
        return (
            <Landing percentage={this.props.percentage} nickName={this.props.nickName}/>
        );
    }
}

export default App;

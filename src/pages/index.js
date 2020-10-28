import React from "react";
import TicTacToe from "./components/TicTacToe";
import "./commands";
import "cypress-axe";
import "@testing-library/cypress/add-commands";

class Home extends React.Component{
	render(){
		return(<div> <TicTacToe/> </div>);
	}
}

export default Home;

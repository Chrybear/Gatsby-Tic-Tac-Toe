import * as React from "react";
import renderer from "react-test-renderer";
import Game from "../game.js";

test('Make sure jumpTo function works', () =>{
	const wrap = renderer.create(<Game/>);
	const inst = wrap.getInstance();
	//Set board to a few moves into an intense game of tictactoe
	inst.handleClick(0);
	inst.handleClick(1);
	inst.handleClick(4);
	inst.handleClick(8);
	/*Board should be [X, O, Null
					   Null, X, Null
					   Null, Null, O]*/
	//Lets return to the second move
	const expect_sqr = inst.state.history[2].squares;
	inst.jumpTo(2);
	/*Board should be [X, O, Null
					   Null, Null, Null
					   Null, Null, Null]*/
	//console.log(inst.state.history[inst.state.stepNumber]);
	const sqr = inst.state.history[inst.state.stepNumber].squares;
	//console.log(sqr);
	expect(sqr).toBe(expect_sqr);
	
	
	
});
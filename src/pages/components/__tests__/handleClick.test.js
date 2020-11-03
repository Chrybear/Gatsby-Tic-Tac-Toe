import * as React from "react";
import renderer from "react-test-renderer";
import Game from "../game.js";

test('Make sure board is updated when square is clicked', () =>{
	const wrap = renderer.create(<Game/>);
	const inst = wrap.getInstance();
	//"Click" top left
	inst.handleClick(0);
	const sqr = inst.state.history[1].squares;
	//console.log('Handle Click test');
	//console.log(sqr[0]);
	expect(sqr[0]).toBe('X');
});
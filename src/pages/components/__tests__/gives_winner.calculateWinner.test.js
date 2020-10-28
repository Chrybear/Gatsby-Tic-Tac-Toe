import * as React from "react";
import renderer from "react-test-renderer";
import Game from "../game.js";
				
test('Simple test for when there is a winner', () => {
	const dummy = [	"X", "R", "A",
				null, "X", null,
				null, null, "X"];
	const wrap = renderer.create(<Game/>);
	const getIn = wrap.getInstance();
	//console.log(getIn);
	expect(getIn.calculateWinner(dummy)).toBe("X");
})
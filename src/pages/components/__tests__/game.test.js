import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Game from '../game.js';
configure({ adapter: new Adapter() });


describe('Game', () =>{
	it('Should show next player is X', () =>{
		const wrap = mount(<Game />);
		const txt = wrap.find('.game-info div');
		console.log(txt.text());
		expect(txt.text()).toBe('Next player: X');
	});
	
	it('Player should be O after a square is clicked', () =>{
		const wrap = mount(<Game />);
		//Okay, it isn't technically clicking the button, but the function is the same
		wrap.instance().handleClick(0); //Simulates clicking the top left space
		const txt = wrap.find('.game-info div');
		console.log(txt.text());
		expect(txt.text()).toBe('Next player: O');
	});
	
	it('Player should be X again after another clicked square', () =>{
		const wrap = mount(<Game />);
		wrap.instance().handleClick(0); //"Click" the first square again
		wrap.instance().handleClick(1); //"Now it's X's turn again
		const txt = wrap.find('.game-info div');
		console.log(txt.text());
		expect(txt.text()).toBe('Next player: X');
	});
	
});
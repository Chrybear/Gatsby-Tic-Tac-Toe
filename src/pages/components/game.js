import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import Board from './board.js';
import DK from "./Donkey_Kong2.jpg";
import DK_sad from "./DK_dissapointed.gif";

class Game extends React.Component {
      constructor(props) {
      super(props);
      this.state = { history: [
        {
            squares: Array(9).fill(null),
        }
       ],
        stepNumber: 0,
        xIsNext: true,};
      }
	
	calculateWinner(squares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		  ];
	    for (let i = 0; i < lines.length; i++) {
		  const [a, b, c] = lines[i];
		  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
		    return squares[a];
		  }
	    }
	    return null;
	}
	

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (this.calculateWinner(squares) || squares[i]) {
          return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
          history: history.concat([
          {
            squares: squares,
          }
          ]),
          stepNumber: history.length,
          xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step){
        this.setState({
            stepNumber: step, xIsNext: (step % 2) === 0,
         });
    }
	

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = this.calculateWinner(current.squares);

        const moves = history.map((step, move) => {
        const desc = move ?
        'Go to move #' + move :
        'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => this.jumpTo(move)}>{desc}</button>
            </li>
            );
        });
        let status;
        if (winner) {
          status = "Winner: " + winner;
        } else {
          status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }
		
		if (status.substring(0, 6) === "Winner"){
			return (
			  <div className="game">
				<div className="game-board">
				  <Board
					squares={current.squares}
					onClick={i => this.handleClick(i)}
				  />
				</div>
				<div className="game-info">
				  <div>{status}</div>
				  <ol>{moves}</ol>
				  </div>
				  <br/>
				  <img src ={DK} alt="Oh, Banana"/>
			  </div>
			);
		}else if (this.state.stepNumber >= 9){
			status = "STALEMATE";
			return (
			  <div className="game">
				<div className="game-board">
				  <Board
					squares={current.squares}
					onClick={i => this.handleClick(i)}
				  />
				</div>
				<div className="game-info">
				  <div>{status}</div>
				  <div>Return to the past!</div>
				  <ol>{moves}</ol>
				  </div>
				  <br/>
				  <img src ={DK_sad} alt="Oh, Banana..."/>
				</div>
			);
		}else{
			return (
			  <div className="game">
				<div className="game-board">
				  <Board
					squares={current.squares}
					onClick={i => this.handleClick(i)}
				  />
				</div>
				<div className="game-info">
				  <div>{status}</div>
				  <ol>{moves}</ol>
				  </div>
			  </div>
			);
		}
    }
	
  }


// ========================================
/*
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
*/
/*
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
*/
export default Game;
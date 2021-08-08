import logo from './logo.svg';
import './App.css';
import React from 'react';
import feed from './feed'
import Registration from './registration'
import { render } from '@testing-library/react';
import Movie from './movie';
import Home from './home';
import AboutUs from './aboutus';
import Login from './login'
import ErrorPage from './error';
import RegisterUser from './registerUser';
import Footer from './footer'
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';


function Square(props) {
  console.log('square props--', props);
  return (
    <button className="square" onClick={props.onClickSquare}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    //console.log('board--', i);
    return (
      <Square
        value={this.props.squares[i]}
        onClickSquare={() => this.props.onClickBoard(i)}
      />
    );
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props)
 { 

    super(props);
    console.log('props of object', props);
    let arr = [ function concat(){return '123456'} ]
    console.log('props of array', arr.push(1," ",2), arr);

    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };

  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    console.log('historyHandleClick--',history);
    const current = history[history.length - 1];
    console.log('squareHandleClick 1--',current.squares);

    const squares = current.squares.slice();

    console.log('squareHandleClick 2--',squares);
    console.log('calculateWinner(squares) --',calculateWinner(squares));

    if (calculateWinner(squares) || squares[i]) {
     // return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
   // console.log('state-', Object.values(this.state));
    console.log('history-', history);

    console.log('this.state.stepNumber-', this.state.stepNumber);

    const current = history[this.state.stepNumber];
    console.log('current-', current);

    const winner = calculateWinner(current.squares);
    console.log('winner-', winner);

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

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClickBoard={ (j) => { console.log('j--', j); return this.handleClick(j)}}
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

// ========================================

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]; //Destructuring
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


function App() {
  return (
 
    <div className="App">
      <>
  
       
      <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/movie' component={Movie}></Route>
          <Route exact path='/registration' component={Registration}></Route>
          <Route  path='/registration/user' component={RegisterUser}></Route>
          <Route exact path='/aboutus' component={AboutUs}></Route>
          <Route exact path='/login' component={Login}></Route>

          <Route path='*' component={ErrorPage}></Route>
      </Switch>
      <Footer/>
      </>
    </div>

   
  );
}




export default App;

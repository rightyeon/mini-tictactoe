import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// button을 렌더링
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

// tictactoe 판(보드) 렌더링
// 어떤 사각형이 채워졌는지(게임의 상태) 여부 관리
class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // null 값인 배열 9개 만들기
      // Array.prototype.fill은 배열에 동일한 value값을 채워주는 메소드
      squares: Array(9).fill(null),
      xIsNext: true,
      
    };
  }
  handleClick(i) {
    // 기존 배열을 수정하지 않고 squares 배열의 복사본을 생성하여 수정
    const squares = this.state.squares.slice();
    // 누군가 승리하거나 Square가 이미 채워졌다면 클릭 무시
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares:squares,
      xIsNext : !this.state.xIsNext,
    })
  }

  // Square에서 Board의 state를 직접 변경할 수 없음
  // 대신에 Board -> Square로 함수를 전달하고 Square가 사각형을 클릭할때 함수 호출
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    }
    else {
      status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div>
        <div className="status">{status}</div>
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
    )
  }
}

// 게임판을 렌더링하며 나중에 수정할 자리 표시값을 가지고 있음
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div clasName="game-board">
          <Board/>
        </div>
        <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
 


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

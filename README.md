# Getting Started with Tic Tac Toe

### [리액트 공식 문서 가이드 자습서](https://ko.reactjs.org/tutorial/tutorial.html) 읽고 틱택토 만들어보기
<br>

#### 👉 자습서를 따를 때는 복붙이 아닌 손으로 직접 타이핑해보면서 작성하는 것을 추천한다. 
<br>

---
<br>

### **1. 초기 환경 설정**
- 작업할 폴더에 cra 설치<br>

    ```npx create-react-app workspace```

- index.js와 index.css 초기 코드 작성<br> 
[초기화 코드](https://codepen.io/gaearon/pen/oWWQNa?editors=0010)

<br>
<br>

```javascript

// button을 렌더링
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

// tictactoe 판(보드) 렌더링
class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }
  render() {
    const status = 'Next player: X';
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
class Game extends React.component {
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
```

- Square 컴포넌트가 하는 일 : Button을 렌더링
- Board 컴포넌트가 하는 일 : 사각형 9개(틱택토판) 렌더링
- Game 컴포넌트가 하는 일 : 게임판을 렌더링하며 나중에 수정할 자리표시값을 가지고 있음

<br>
초기 코드에는 사용자와 상호작용 하는 컴포넌트가 없다.

<br><br><br><br>

### **2. Props를 통해 데이터 전달하기**
작성중


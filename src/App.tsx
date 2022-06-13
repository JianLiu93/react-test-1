import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>{n}</div>
      <button onClick={() => {
        n += 1;
        render();
      }}
      >
      +1      
      </button>
      <div>组件
        <Child numbers={['a','b','c']} />
      </div>
    </div>
  );
}

let n = 0;
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const render = () => {
  root.render(<App />);
}

const Child = (props:any) => {
  const array = []
  for(let i=0;i<props.numbers.length;i++) {
    array.push(<div>{i}: {props.numbers[i]}</div>)
  }
  return (<div>{ array }</div>)
}


export default App;

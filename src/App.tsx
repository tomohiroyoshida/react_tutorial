import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greets from './Greets';

const elems = (
  <>
    <div>foo</div>
    <div>bar</div>
    <div>baz</div>
  </>
);
const TextInput: React.FunctionComponent = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const handleClick = (): void => {
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div>
      5-2. JSXの書き方
      <input type="text" ref={inputRef} />
      <input type="button" value="Focus" onClick={handleClick} />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{elems}</p>
        <TextInput />
        {/* <form>
          <textarea value="Fixed Text" />
          <select value="saturn">
          <option value="saturn">Saturn</option>
          <option value="uranus">Uranus</option>
          <option value="neptune">Neptune</option>
          <option value="pluto">Pluto</option>
          </select>
        </form> */}
        <Greets name="Patty" times={2}>
          {/* props.children */}
          <span role="img" aria-label="rabbit">
            🐰
          </span>
        </Greets>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import { useState } from 'react';
import Counter from './Counter';

export default function Header() {
  const [startValue, setStartValue] = useState('');
  const [inputValue, setInputValue] = useState();

  return (
    <header className="App-header">
      <input
        type="text"
        placeholder="start value"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={() => setStartValue(parseInt(inputValue))}>start</button>
      {
        !!startValue && <Counter start={startValue} />
      }
    </header>
  )
}
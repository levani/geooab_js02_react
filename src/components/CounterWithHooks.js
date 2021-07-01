import { useEffect, useState } from "react"

export default function Counter({ start, increment }) {
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(start);
  }, [start]);

  useEffect(() => {
    let id = setInterval(() => {
      setCounter(currentValue => currentValue + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    }
  }, []);

  // useEffect(() => {
  //   if (counter > 110) {
  //     alert('count > 110');
  //   }
  // }, [counter]);

  return (
    <div>
      <p>{counter}</p>
      <button
        onClick={() => setCounter(counter + (increment || 1))}
      >
          click
      </button>
    </div>
  )
}
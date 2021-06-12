import { useState } from "react";

export default function Comments() {
  const [title, setTitle] = useState('test');

  function onClick() {
    alert(title);
  }

  return (
    <div>
      <h1>{title}</h1>
      <form action="/submit">
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={e => {
            setTitle(e.target.value)
          }}
        />
        <p>
          <button type="button" onClick={onClick}>Submit</button>
        </p>
      </form>
    </div>
  )
}
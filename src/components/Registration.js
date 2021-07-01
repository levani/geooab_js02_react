import axios from "axios";
import { useReducer } from "react";

const initialState = {
  username: '',
  email: '',
  password: ''
};

function reducer(state, action) {
  return {...state, ...{[action.type]: action.value}};

//   switch (action.type) {
//     case 'username':
//       return {...state, ...{username: action.value}};
//     case 'email':
//       return {...state, ...{email: action.value}};
//     case 'password':
//       return {...state, ...{password: action.value}};
//     default:
//       throw new Error();
//   }
}

export default function Registration() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function onSubmit() {
    axios.post('/submit', state);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <p>
          <input
            type="text"
            name="username"
            value={state.username}
            onChange={(e) => dispatch({type: 'username', value: e.target.value})}
          />
        </p>
        <p>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={(e) => dispatch({type: 'email', value: e.target.value})}
          />
        </p>
        <p>
          <input type="password" name="password" value={state.password}
            value={state.password}
            onChange={(e) => dispatch({type: 'password', value: e.target.value})}
          />
        </p>
      </form>
    </div>
  )
}
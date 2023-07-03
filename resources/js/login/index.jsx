import { useState } from 'react';
import Button from '../shared/components/Button';
import { SERVER_URL } from '../shared/consts';

const token = document.head.querySelector('meta[name="csrf-token"]')?.content;

function Login() {
  const [vals, setVals] = useState({
    username: '',
    password: '',
  });

  return (
    <div className="col justify-center items-center w-full h-full">
      <form
        className="col p-2 justify-center items-center w-96"
        action={`${SERVER_URL}/login`}
        method="POST"
      >
        <input type="hidden" value={token} name="_token" />
        <label
          className="row m-2 w-full justify-between items-center"
          htmlFor="username-input"
        >
          <span>Username</span>
          <input
            type="text"
            className="p-1 ml-2 border focus:border-pastel-green border-b-cornflower-blue"
            id="username-input"
            name="username"
            value={vals.username}
            onChange={(e) => setVals({
              ...vals,
              username: e.target.value
            })}
          />
        </label>
        <label
          className="row m-2 w-full justify-between items-center"
          htmlFor="password-input"
        >
          <span>Password</span>
          <input
            type="password"
            id="password-input"
            className="p-1 ml-2 border focus:border-pastel-green border-b-cornflower-blue"
            name="password"
            value={vals.password}
            onChange={(e) => setVals({
              ...vals,
              password: e.target.value
            })}
          />
        </label>
        <div className="p-2">
          <Button submits>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;

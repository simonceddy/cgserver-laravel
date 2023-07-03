import { useState } from 'react';

function Login() {
  const [vals, setVals] = useState({
    username: '',
    password: '',
  });
  return (
    <div>
      <label htmlFor="username-input">
        <span>Username</span>
        <input
          type="text"
          id="username-input"
          name="username-input"
          value={vals.username}
          onChange={(e) => setVals({
            ...vals,
            username: e.target.value
          })}
        />
      </label>
      <label htmlFor="password-input">
        <span>Password</span>
        <input
          type="password"
          id="password-input"
          name="password-input"
          value={vals.password}
          onChange={(e) => setVals({
            ...vals,
            password: e.target.value
          })}
        />
      </label>
    </div>
  );
}

export default Login;

import React, { useEffect, useState } from "react";

export const Form = () => {
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );
  const [password, setPassword] = useState(
    localStorage.getItem("password") || ""
  );
  const [passwordConfirmation, setPasswordConfirmation] = useState(
    localStorage.getItem("passwordConfirmation") || ""
  );
  const [error, setError] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    localStorage.setItem("username", e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    localStorage.setItem("password", e.target.value);
  };

  const handlePasswordConfirmationChange = (e) => {
    setPasswordConfirmation(e.target.value);
    localStorage.setItem("passwordConfirmation", e.target.value);
  };

  const submitForm = () => {
    localStorage.removeItem("username");
    setUsername("");
    localStorage.removeItem("password");
    setPassword("");
    localStorage.removeItem("passwordConfirmation");
    setPasswordConfirmation("");
  };

  useEffect(() => {
    setError(password !== passwordConfirmation);
  }, [password, passwordConfirmation]);

  return (
    <div className="form">
      <h1>Create Account</h1>
      <label htmlFor="username">Username:</label>
      <input
        onChange={handleUsernameChange}
        type="text"
        placeholder="john doe"
        id="username"
        value={username}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        placeholder="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        placeholder="password"
        id="confirmPassword"
        value={passwordConfirmation}
        onChange={handlePasswordConfirmationChange}
      />
      {error && passwordConfirmation && (
        <p className="error">
          Error: password and password confirmation do not match
        </p>
      )}
      <button onClick={submitForm} disabled={error || !username || !password}>
        Submit
      </button>
    </div>
  );
};

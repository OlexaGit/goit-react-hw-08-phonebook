import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { logIn } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import css from './LoginView.module.css';

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const { IsErrorLogin } = useAuth();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit} className={css.form}>
        <label htmlFor={nameInputId}>Email</label>
        <input
          className={css.formInput}
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          id={nameInputId}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Invalid email address"
          required
        />
        <label htmlFor={numberInputId}>Password</label>
        <input
          className={css.formInput}
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          id={numberInputId}
          autoComplete="current-password"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Input Password and Submit [8 to 25 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character]"
          required
        />
        <button className={css.formButton} type="submit">
          Log in
        </button>
      </form>
      {IsErrorLogin && (
        <div>
          <h5>Invalid Email address or Password!</h5>
        </div>
      )}
    </div>
  );
};
export default LoginView;

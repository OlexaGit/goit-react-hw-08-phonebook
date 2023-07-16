import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { logIn } from 'redux/auth/authOperations';
import css from './LoginView.module.css';

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nameInputId = nanoid();
  const numberInputId = nanoid();

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
          // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
          // pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          // title="Password must be digits and can contain spaces, dashes, parentheses."
          required
        />
        <button className={css.formButton} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};
export default LoginView;

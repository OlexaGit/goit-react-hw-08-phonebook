import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import css from './RegisterView.module.css';

const RegisterView = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    dispatch(register({ name, email, password }));
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className={css.form}>
        <label htmlFor={'name'}>Name</label>
        <input type="text" name="name" id="name" className={css.formInput} />
        <label htmlFor={'email'}>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          className={css.formInput}
        />
        <label htmlFor={'password'}>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          className={css.formInput}
        />
        <button type="submit" className={css.formButton}>
          Sign in
        </button>
      </form>
    </div>
  );
};
export default RegisterView;

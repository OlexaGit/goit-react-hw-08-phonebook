import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import css from './RegisterView.module.css';

const RegisterView = () => {
  const dispatch = useDispatch();
  const { IsErrorLogin } = useAuth();

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
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Invalid email address"
          className={css.formInput}
        />
        <label htmlFor={'password'}>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="current-password"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Input Password and Submit [8 to 25 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character]"
          className={css.formInput}
        />
        <button type="submit" className={css.formButton}>
          Sign in
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
export default RegisterView;

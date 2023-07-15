import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

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
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">register</button>
      </form>
    </div>
  );
};
export default RegisterView;

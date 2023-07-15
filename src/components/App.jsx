import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import AppBar from './AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import HomeView from 'views/HomeView/HomeView';
import RegisterView from '../views/RegisterView/RegisterView';
import LoginView from 'views/LoginView/LoginView';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <AppBar />
      {/* <Routes>
        <Route path="/" Component={<HomeView />} />
        <Route path="/register" Component={<RegisterView />} />
        <Route path="/login" Component={<LoginView />} />
      </Routes> */}
      <section>
        <Form />
      </section>
      <section>
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
      </section>
    </div>
  );
};

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import HomeView from 'views/HomeView/HomeView';
import RegisterView from '../views/RegisterView/RegisterView';
import LoginView from 'views/LoginView/LoginView';
import ContactsView from 'views/ContactsView/ContactsView';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import Loader from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <div>
      <Loader />
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomeView />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contact"
              component={<RegisterView />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contact" component={<LoginView />} />
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsView />} />
          }
        />
      </Route>
    </Routes>
  );
};

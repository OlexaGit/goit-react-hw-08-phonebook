import AppBar from 'components/AppBar/AppBar';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

// const pages = [
//   { title: 'HomeView', path: '/' },
//   { title: 'RegisterView', path: '/register' },
//   { title: 'LoginView', path: '/login' },
//   { title: 'ContactsView', path: '/contact' },
// ];

export const SharedLayout = () => {
  return (
    <div>
      <AppBar />
      {/* <ul>
        {pages.map(({ title, path }) => {
          return (
            <li key={title}>
              <NavLink to={path}>{title}</NavLink>
            </li>
          );
        })}
      </ul> */}

      <Outlet />
    </div>
  );
};

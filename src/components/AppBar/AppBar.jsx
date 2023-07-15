import HomeView from 'views/HomeView/HomeView';
import css from './AppBar.module.css';
import { Navigation } from 'components/Navigation/Navigation';
import { useAuth } from 'hooks';
import { AuthNav } from 'components/AuthNav/AuthNav';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <Navigation />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      {isLoggedIn ? <HomeView /> : <AuthNav />}
    </header>
    // <header>
    //   <h1>Phonebook</h1>
    //   <HomeView />
    // </header>
  );
};
export default AppBar;

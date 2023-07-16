import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsErrorLogin,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const IsErrorLogin = useSelector(selectIsErrorLogin);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    IsErrorLogin,
  };
};

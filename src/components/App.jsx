import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Home from 'pages/home/Home';
import Contacts from 'pages/contacts/Contacts';
import LogIn from 'pages/LogIn';
import Register from 'pages/Register';

import SharedLayout from './SharedLayout';
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';

import { selectIsRefreshing } from 'redux/Auth/selectors';
import { refreshUser } from 'redux/Auth/operations';

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div className="backdrop"></div>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/log-in" component={<Contacts />} />
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/log-in"
          element={<PublicRoute redirectTo="/contacts" component={<LogIn />} />}
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;

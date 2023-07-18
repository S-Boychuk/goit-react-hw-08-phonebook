import Contacts from 'pages/contacts/Contacts';
import Home from 'pages/home/Home';
import LogIn from 'pages/logIn/LogIn';
import Register from 'pages/register/Register';
import SharedLayout from './SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';

const App = () => {
  return (
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

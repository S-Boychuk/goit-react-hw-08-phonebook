import Contacts from 'pages/contacts/Contacts';
import Home from 'pages/home/Home';
import LogIn from 'pages/logIn/LogIn';
import Register from 'pages/register/Register';
import SharedLayout from './SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;

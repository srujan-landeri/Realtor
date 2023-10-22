/* Importing styles */
import './App.css';

/* Importing Routing components */
import {BrowserRouter, Switch, Routes, Route} from 'react-router-dom';

/* Importing pages */
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Profile from './pages/Profile'
import Offers from './pages/Offers'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/offers" element={<Offers/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

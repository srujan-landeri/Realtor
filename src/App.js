/* Importing Routing components */
import {BrowserRouter, Routes, Route} from 'react-router-dom';

/* Importing pages */
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Profile from './pages/Profile'
import Offers from './pages/Offers'

/* Importing components */
import Header from './components/Header';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
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

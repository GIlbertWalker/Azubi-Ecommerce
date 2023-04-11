import {Routes, Route} from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Loginpage';
import RegistrationPage from './pages/RegisterPage'
import HomePage from './pages/Home';
import Cart from './pages/cartpage';


function App() {
  return (
    <Routes>
      <Route index path='/' element={<HomePage/>}></Route>
      <Route path='Login' element={<LoginPage/>}></Route>
      <Route path='SignUp' element={<RegistrationPage/>}></Route>
      <Route path='Cart' element={<Cart/>}></Route>
    </Routes>
  );
}

export default App;


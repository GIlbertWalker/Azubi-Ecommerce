

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import RegistrationPage from './Pages/RegistrationPage';
import LoginPage from './Pages/LoginPage';
import DetailsPage from './Pages/DetailsPage';
import Cart from './Pages/Cart';
/*import NavBar from './components/NavBar';*/




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} ></Route>
          <Route path="/Registration" element={<RegistrationPage />}></Route>
          <Route path="/Login" element={<LoginPage />} ></Route>
          <Route path="DetailsPage" element={<DetailsPage />} ></Route>
          <Route path="Cart" element={<Cart />}  ></Route>
        </Routes>
      </Router>


    </div>
  );
}

export default App;

//..

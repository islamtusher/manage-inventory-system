import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Header from './pages/home/homeComponents/Header';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;

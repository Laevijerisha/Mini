import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddCenter from './Components/AddCenter';
import SubmitRequest from './Components/SubmitRequest';
import AdminDash from './Components/AdminDash';
import CenterDash from './Components/CenterDash';
import UserDash from './Components/UserDash';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      
        <Route path='/' element={<Login/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/admindash' element={<AdminDash/>}></Route>
        <Route path='/centerdash' element={<CenterDash/>}></Route>
        <Route path='/userdash' element={<UserDash/>}></Route>
      </Routes>
      </BrowserRouter> 
     
    </div>
  );
}

export default App;

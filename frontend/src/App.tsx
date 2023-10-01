import ReactDOM from "react-dom/client";
import './App.css';
import Payment from './pages/payment_coin/payment_coin';
import Login  from './pages/login/login';
import Register from "./pages/register/register";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/buycoin' element={<Payment />}/>
        <Route path='/register' element={<Register/>}/>
      </Routes >
    </BrowserRouter>
    
  );
}

export default App;

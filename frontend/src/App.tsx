import ReactDOM from "react-dom/client";
import './App.css';



//page
import Payment from './pages/payment_coin/payment_coin';
import Login  from './pages/login/login';
import Register from "./pages/register/register";
// import Dashboard from './pages/dashboard/index';
import Bookshelf from "./pages/bookshelf/bookshelf";
import Publish from "./pages/publish/publish";

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
        <Route path='/Buycoin' element={<Payment />}/>
        <Route path='/Register' element={<Register/>}/>
        {/* <Route path='/Home' element={<Dashboard/>}/> */}
        <Route path='/Bookshelf' element={<Bookshelf/>}/>
        <Route path='/Publish' element={<Publish/>}/>
      </Routes >
    </BrowserRouter>
    
  );
}

export default App;

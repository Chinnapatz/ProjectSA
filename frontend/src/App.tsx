import ReactDOM from "react-dom/client";
import './App.css';



//page
import Payment from './pages/payment_coin/payment_coin';
import Login  from './pages/login/login';
import Register from "./pages/register/register";
import Publish_Ep from "./pages/publish_episodes/publish_ep";
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
        <Route path='/Publish_Ep' element={<Publish_Ep/>}/>
        
      </Routes >
    </BrowserRouter>
    
  );
}

export default App;

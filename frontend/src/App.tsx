import ReactDOM from "react-dom/client";
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
//page
import Login  from './pages/login/login';
import Register from "./pages/register/register";
import Payment from './pages/payment_coin/payment_coin'
import Publish_Se from "./pages/publish_episodes/publish_se";
import Publish_Ep from "./pages/publish_series/publish_ep";
import Bookshelf_followed from "./pages/bookshelf/bookshelf_followed";
import Bookshelf_bought from "./pages/bookshelf/bookshelf_bought";
import Bookshelf_history from "./pages/bookshelf/bookshelf_history";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/Buycoin' element={<Payment />}/>
        <Route path='/Register' element={<Register/>}/>
        {/* <Route path='/Home' element={<Dashboard/>}/> */}
        {/* <Route path='/Bookshelf' element={<Bookshelf/>}/>
        <Route path='/Publish' element={<Publish/>}/> */}
        <Route path='/Publish_Se' element={<Publish_Se/>}/> 
        <Route path='/Publish_Ep' element={<Publish_Ep/>}/>            
        <Route path='/Bookshelf' element={<Bookshelf_followed/>}/>            
        <Route path='/Bookshelf/Followed' element={<Bookshelf_followed/>}/>            
        <Route path='/Bookshelf/History' element={<Bookshelf_history/>}/>            
        <Route path='/Bookshelf/Bought' element={<Bookshelf_bought/>}/>            
      </Routes >
    </BrowserRouter>
    
  );
}

export default App;

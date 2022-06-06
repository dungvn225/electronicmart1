import Header from './Components/Header';
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import CartPage from './Pages/CartPage';
function App() {
  

 
   
  return (
    <BrowserRouter>
    <div>
   
    <Header/>
     
         <Routes>
              <Route path='/' exact element={<Homepage/>} />
              <Route path='/electronicmart' exact element={<Homepage/>} />
              <Route path='/electronicmart/cart' exact element={<CartPage/>} />
         </Routes>
     
 
    <Register/>
     <Login/>
</div>
</BrowserRouter>

  );
}

export default App;

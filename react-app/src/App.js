import React from 'react'
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Card from './components/Card/Card';
import { ToastContainer } from 'react-toastify';
import AddCandidate from './components/AddCandidate/AddCandidate';

function App() {

  return (
  <>
    <div>
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
      />
    </div>
    <BrowserRouter>
      
       <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/add' element={<AddCandidate/>}/>
       </Routes>
       
    </BrowserRouter>
  </>
  );
}

export default App;

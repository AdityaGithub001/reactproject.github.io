
import react from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css'
import Create from './Component/Create';
import Read from './Component/Read';
import Update from './Component/Update';
import Home from './Component/Home';
import AdminLog from './Component/AdminLog';

function App() {
  return (
    <div >

   <Routes>
   
   <Route path="/create" element={<Create/>}></Route>
   <Route path="/update" element={<Update/>}></Route>
   <Route path="/Admin" element={<AdminLog/>}></Route>
   <Route path="/datatable" element={<Read/>}></Route>
   <Route exact path="/" element={<Home/>}></Route>
   </Routes> 
   
   
  
  
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Dashboard,Login,Landing,Error,Register,Appointments,HealthBlog} from './pages';
import './index.css'
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/landing" element={<Landing />}/>
      <Route path='/appointments' element={<Appointments/>}/>
      <Route path='/healthblog' element={<HealthBlog/>}/>
      <Route path="*" element={<Error/>}/> 
    </Routes>
    
  </BrowserRouter>
  );
}

export default App;

import { Route, Routes } from 'react-router';
import './App.css';
import Login from './pages/Login';
import OtpVerfication from './pages/OtpVerfication';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     




     <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/otpverification' element={<OtpVerfication/>}/>
      <Route path='/' element={<Home/>}/>

     </Routes>
    </div>
  );
}

export default App;

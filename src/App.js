import logo from './logo.svg';
import './App.css';
import Navb from './components/Navb';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Service from './pages/Service';
import Booking from './pages/Booking';
import AdminDashboard from './pages/AdminDashboard';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Navb/>
      <Sidebar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/Booking' element={<Booking />} />
          <Route path='/admin' element={<AdminDashboard/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

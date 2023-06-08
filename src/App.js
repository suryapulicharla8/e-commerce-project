// import logo from './logo.svg';
import './App.css';

import ApiFile from './Components/API/ApiFile';
import Home from './Components/Home';
import {BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom';
import Mobile from './Components/Mobile';
import MacBook from './Components/MacBook';
import Accessories from './Components/Accessories';
import Ipad from './Components/Ipad';
import Laptop from './Components/Laptop';
import Header from './Components/Header';
import Slides from './Slides';



function App() {
  return (
    <div className='big-container'>
      <Header/>
    
      {/* <Slides/> */}
      <Router>
        <div className='routes-container' style={{display:"flex"}}>
          <Link className='link' to='/'>Home</Link>
          <Link className='link' to='/mobile'>Mobile</Link>
          <Link className='link' to='/macbook'>MacBook</Link>
          <Link className='link' to='/ipad'>Ipad</Link>
          <Link className='link' to='/accessories'>Accessories</Link>
          <Link className='link' to='/laptop'>Laptop</Link>
        </div>
      </Router>
      <Slides/>
      
      <ApiFile>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/mobile' element={<Mobile/>}></Route>
            <Route path='/ipad' element={<Ipad/>}></Route>
            <Route path='/macbook' element={<MacBook/>}></Route>
            <Route path='/accessories' element={<Accessories/>}></Route>
            <Route path='/laptop' element={<Laptop/>}></Route>
          </Routes>
        </Router>
      </ApiFile>
    </div>
  );
}

export default App;

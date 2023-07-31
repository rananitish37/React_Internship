import './App.css';
import { Route,Routes,BrowserRouter, Link} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {NotFound} from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link className='link' to="/" >Home</Link>
        <Link className='link' to="/About" >About</Link>
        <Link className='link' to="/NotFound" >NotFound</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

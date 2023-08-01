import './App.css';
import { Route,Routes,BrowserRouter, Link} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {NotFound} from './NotFound';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { Route,Routes,BrowserRouter, Link} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {NotFound} from './NotFound';
import {Books} from './Books';
import Navbar from './Components/Navbar';
import Signin from './Signin';
import SignUp from './SignUp';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Books' element={<Books/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='*' element={<NotFound/>}/>
        
    </Routes>
    </BrowserRouter>
  );
}

export default App;

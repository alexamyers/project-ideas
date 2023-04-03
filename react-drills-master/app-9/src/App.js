import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import router from './Router';

function App() {
 return(
   <div className='App'>
     <nav>
       <ul>
         <Link to="/">Home</Link>
         <Link to="/signup">Sign Up</Link>
         <Link to="/details">Details</Link>
       </ul>
     </nav>

     <br />

     { router }
   </div>
 );
}

export default App;
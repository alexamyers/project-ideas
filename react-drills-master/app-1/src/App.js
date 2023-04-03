// CLASS EXAMPLE BELOW *************************

// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   constructor() {
//     super();

//     this.state = { message: "" };
//   }
 
//   handleChange(val) {
//     this.setState({ message: val });
//   }
  
//   render() {
//   return( 

//     <div className='App'>
//       <input type='text' onChange={e => this.handleChange(e.target.value) } />
//       <p>{this.state.message}</p>
//     </div>

//     )
//   }
// }

// export default App;


import React, { useState } from 'react';
import './App.css';

function App() {
const [input, setInput] = useState("")

return (
  <div className='App'>
    <input type='text' onChange={(e) => setInput(e.target.value)}/>
    <p>{ input }</p>
  </div>
);
}


export default App;



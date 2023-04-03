// CLASS METHOD SOLUTION *********************

// import React, { Component }from 'react';
// import './App.css';

// class App extends Component {
//   constructor() {
//     super();

//     this.state = { jellybeans: ["terryfolds", "galaxian death crystals", "plumbus"] };
//   }

//   render() {
//     let jelliesDisplay = this.state.jellybeans.map((element, index) => {
//       return <h2 key={index}>{element}</h2>;
//     });
    
//     return <div className='App'>{ jelliesDisplay }</div>
//   }
// }

// export default App;


// FUNCTION METHOD SOLUTION *************************

import React, {useState} from 'react';
import './App.css';

function App() {
const [list, setList] = useState(['apple', 'orange', 'mango', 'kiwi']);

let shownList = list.map((element, index) => {
  return <h2 key={index}>{element}</h2>
})

return( 
  <div className='App'>
    { shownList }
  </div>
);
}

export default App;

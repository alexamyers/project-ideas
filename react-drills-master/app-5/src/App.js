// import React, { Component } from 'react';
// import Image from './Image';



// class App extends Component {
//   render(){
//     return (
//       <div>
//         < Image url={"https://http.cat/409"}/>
//       </div>
//     )
//   }
// }

// export default App;


import React from 'react';
import './App.css';
import Image from './Image';

function App() {
  return (
    <div>
      <Image url={'https://http.cat/409'} />
    </div>
  );
}

export default App;
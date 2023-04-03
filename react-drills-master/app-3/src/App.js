// import React, { Component } from 'react'; 
// import './App.css';

// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       filteredDogs: "",
//       dogs: ["Pitbull", "Collie", "Boxer", "Chihuahua"]
//     };
//   }

//   handleChange(val) {
//     this.setState({ filteredDogs: val });
//   }

//   render() {
//     let dogsToDisplay = this.state.dogs
//     .filter((element, index) => {
//       return element.includes(this.state.filteredDogs);
//     })
//     .map((element, index) => {
//       return <h2 key={ index }>{ element }</h2>
//     });

//     return(
//       <div className='App'>
//         <input onChange={ e => this.handleChange(e.target.value) } type="text"/>
//         { dogsToDisplay }
//       </div>
//     );
//   }
// }

// export default App;


import React, {useState} from 'react';
import './App.css';

function App() {
const [array, setArray] = useState(['pitbull', 'chihuahua', 'bull terrier', 'poodle', 'boston terrier']);
const [search, setSearch] = useState("");

let list = array.filter((element, index) => {
  return element.includes(search);
})
.map((element, index) => {
  return <h2 key={index}>{element}</h2>
});

return (
  <div className='App'>
    <input type='text' onChange={(e) => setSearch(e.target.value)}/>
    {list}
  </div>
);

}

export default App;
// import React, { Component, useEffect } from 'react';
// import './App.css';
// import axios from 'axios';

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       wows: ""
//     };
//   }
//   componentDidMount() {
//     axios.get("https://owen-wilson-wow-api.herokuapp.com/wows/random").then(res => {
//       this.setState({  wows: res.data[0] });
//       console.log(res.data)
//     });
//   }


//   render() {
//     return (
//       <div className='App'>
//         <h1>movie: {this.state.wows.movie}</h1>
//         <h1>year: {this.state.wows.year}</h1>
//         <h1>character: {this.state.wows.character}</h1>
//         <h1>wowcount: {this.state.wows.total_wows_in_movie}</h1>
//       </div>
//     );
//   }
// }

// export default App;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";

function App () {
 const [wows, setWows] = useState([])

 useEffect(() => {
   axios.get("https://owen-wilson-wow-api.herokuapp.com/wows/random").then((res) => {
     console.log(res.data)
     setWows(res.data[0])
   })
   .catch((err) => {
     console.log(err)
   })
 }, []);

 return(
   <div className='App'>
     <h1>Movie Title: { wows.movie }</h1>
     <h1>Year: { wows.year }</h1>
     <h1>Character: { wows.character }</h1>
     <h1> Wow Count: { wows.total_wows_in_movie }</h1>
   </div>
 )
}

export default App;


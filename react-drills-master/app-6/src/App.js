// import React, { Component } from 'react';
// import Todo from "./Todo"
// import './App.css'

// class App extends Component{
//   constructor() {
//     super();

//     this.state = {
//       list: [],
//       input: ""
//     };

//     this.handleAddTask = this.handleAddTask.bind(this);
//   }

//   handleInputChange(value) {
//     this.setState({ input: value });
//   }

//   handleAddTask() {
//     this.setState({
//       list: [...this.state.list, this.state.input],
//       input: ""
//     });
//   }

//   render() {
//     let list = this.state.list.map((element, index) => {
//       return <Todo key={index} task={element} />;
//     });

//     return (
//       <div className="App">
//         <h1>My To-do List:</h1>

//         <div>
//           <input value={this.state.input} placeholder="Enter New Task" onChange={e => this.handleInputChange(e.target.value)} />
//           <button onClick={this.handleAddTask}>Add</button>
//         </div>

//         <br/>

//         {list}
//       </div>
//     );
//   }
// }


// export default App;

import React, {useState} from 'react';
import Todo from './Todo';
import './App.css';

function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const displayList = list.map((element, index) => {
    return <Todo list={element} key={index} />
  })

  return(
    <div className='App'>
      <h1>To Do List:</h1>
      <input type='text' onChange={(e) => setItem(e.target.value)}/>
      <button onClick={() => setList([...list, item])}>Add</button>
      {displayList}
    </div>
  )
}

export default App;
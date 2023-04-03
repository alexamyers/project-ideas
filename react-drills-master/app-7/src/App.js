// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import NewTask from './NewTask';
// import List from './List';

// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       list: []
//     };

//     this.handleAddTask = this.handleAddTask.bind(this);
//   }

//   handleAddTask(task) {
//     this.setState({ list: [...this.state.list, task] });
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>My Todo List:</h1>
//         <NewTask add={this.handleAddTask} />
//         <List tasks={this.state.list} />
//       </div>
//     )
//   }
// }

// export default App;


import React, {useState} from 'react';
import './App.css';
import List from './List';
import NewTask from './NewTask';

function App() {
const [tasks, setTasks] = useState([])

const addTaskHandler = (task) => {
  setTasks([...tasks, task])
}

return (
  <div className='App'>
    <h1>More To Do's:</h1>
    <NewTask addTask={addTaskHandler} />
    <List tasks={tasks}/>
  </div>
)
}

export default App;
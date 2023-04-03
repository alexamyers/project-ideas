// import React, { Component } from 'react';

// class NewTask extends Component {
//     constructor() {
//         super();

//         this.state = {
//             input: ""
//         };

//         this.handleAdd = this.handleAdd.bind(this);
//     }

//     handleInputChange(value) {
//         this.setState({ input: value });
//     }

//     handleAdd() {
//         this.props.add(this.state.input);
//         this.setState({ input: "" });
//     }

//     render(){
//         return(
//             <div>
//                 <input value={this.state.input} placeholder="Enter new task" onChange={e => this.handleInputChange(e.target.value)} />
//                 <button onClick={this.handleAdd}>Add</button>
//             </div>
//         )
//     }
//  }

//  export default NewTask;

import React, {useState} from 'react';
import './App.css';

function NewTask(props) {
    const [input, setInput] = useState('')

    const handleInput = (value) => setInput(value)
    const handleAdd = () => props.addTask(input)

    return (
        <div>
            <input type='text' onChange={(e) => handleInput(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default NewTask;
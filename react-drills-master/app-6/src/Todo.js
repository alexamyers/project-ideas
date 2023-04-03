// import React, { Component } from 'react';
// import "./App.css"

// export default class Todo extends Component {
//     render() {
//         return<p>{this.props.task}</p>
//     }
// }

import React from 'react';
import './App.css';

function Todo(props) {
return (
    <h2>{props.list}</h2>
)
}

export default Todo;



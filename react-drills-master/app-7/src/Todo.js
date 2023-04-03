// import React, { Component } from 'react';

// class Todo extends Component {
//     render() {
//         return <p>{this.props.task}</p>
//     }
// }

// export default Todo;

import React from 'react';

function Todo(props) {
    return (
        <h2>{ props.task }</h2>
    )
}

export default Todo;
// import React, { Component } from 'react';
// import Todo from './Todo';

// class List extends Component {
//     render() {
//         let list = this.props.tasks.map((element, index) => {
//             return <Todo key={index} task={element} />;
//         });
//         return <div>{list}</div>;
//     }
// }

// export default List;

import React from 'react';
import './App.css';
import Todo from './Todo';

function List(props) {
    const list = props.tasks.map((element, index ) => {
        return <Todo task={element} key={index} />
    })

    return (
        <div>
            {list}
        </div>
    )
}

export default List;
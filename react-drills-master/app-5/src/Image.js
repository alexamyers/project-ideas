// import React, { Component } from 'react';

// class Image extends Component {
//     render() {
//         return (
//             <div>
//                 <img src={this.props.url} />
//             </div>
//         )
//     }
// }

// export default Image;

import React from 'react';

function Image(props) {
return (
    <div>
        <img src={props.url} alt="" />
    </div>
)
}

export default Image;

// import React, { Component } from 'react';

// class Login extends Component {
//     constructor() {
//         super();

//         this.state = {
//             username: "",
//             password: ""
//         };

//         this.handleLogin = this.handleLogin.bind(this);
//     }

//     handleUsernameChange(name) {
//         this.setState({ username: name });
//     }

//     handlePasswordChange(pass) {
//         this.setState({ password: pass });
//     }

//     handleLogin() {
//         alert(`Username: ${this.state.username} Password: ${this.state.password}`);
//     }

//     render() {
//         return(
//             <div>
//                 <input onChange={e => this.handleUsernameChange(e.target.value)} type="text" />
//                 <input onChange={e => this.handlePasswordChange(e.target.value)} type="text" />
//                 <button onClick={this.handleLogin}>Login</button>
//             </div>
//         );
//     }
// }

// export default Login;


import React, {useState} from 'react';
import './App.css';

function Login() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState(""); 

return (
    <div>
        <input type='text' onChange={(e) => setUsername(e.target.value)}/>
        <input type='text' onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={() => alert(`Username: ${username} Password: ${password}.`)}>Log In</button>
    </div>
)
}
export default Login;
import React from 'react';
import axios from 'axios';


class Register extends React.Component {
   state = {
       login: {
           username: '',
           password: '',
           email: '',
       }
   }

    handleChange = e => {
        this.setState({
            login: {...this.state.login, [e.target.name]: e.target.value}
        })  
    }

    login = e => {
        e.prevendDefault();
        axios.post('', this.state.login)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/protected')
        })
        .catch(err => {
            console.log(err)
        });
    }
    render() {
    return(
        <div className='reg-form'>
            <form>
                <lable>Username:
                    <input type='text' name='username' value={this.state.login.username} onChange={this.handleChange}/>
                </lable>
                <lable>Password:
                    <input type='password' name='password' value={this.state.login.password} onChange={this.handleChange}/>
                </lable>
                <lable>Email: 
                    <input type='email' name='email' value={this.state.login.email} onChange={this.handleChange}/>
                </lable>
            </form>
        </div>
    )
}
}

export default Register;
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Reg = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #4A98E6;
    height: 25vh;
`;

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
        <Reg className='reg-form'>
            <form onSubmit={this.login}>
                <label>Username:
                    <input type='text' name='username' value={this.state.login.username} onChange={this.handleChange}/>
                </label>
                <label>Password:
                    <input type='password' name='password' value={this.state.login.password} onChange={this.handleChange}/>
                </label>
                <label>Email: 
                    <input type='email' name='email' value={this.state.login.email} onChange={this.handleChange}/>
                </label>
                <button className='register' onSubmit={this.login}>Register</button>
            </form>
        </Reg>
    )
}
}

export default Register;
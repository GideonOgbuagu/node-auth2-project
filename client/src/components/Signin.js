import React, { useState } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth"


const Signin = (props) => {
const [signin, setSignin] = useState({
    username: '',
    password: ''
})

const handleChange = e => {
    setSignin({
        ...signin,
        [e.target.name]: e.target.value

    })
}


const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
        .post("/api/auth/login", signin)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            props.history.push('/users');
           
        })
        .catch(err => console.log("From Login", err))
}

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form1" autoComplete="off">
                <input
                    type="text"
                    name="username"
                    value={signin.username}
                    onChange={handleChange}
                    placeholder="Enter Username"
                />
                <input
                    type="password"
                    name="password"
                    value={signin.password}
                    onChange={handleChange}
                    placeholder="Enter Password"
                />
                
                <button>Sign in</button>
            </form>
        </div>
    )
}

export default Signin;

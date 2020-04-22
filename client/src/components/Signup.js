import React, { useState } from 'react';
// import { axiosWithAuth } from "../utils/axiosWithAuth"
import axios from "axios"


const Signup = (props) => {
const [signup, setSignup] = useState({
    username: '',
    password: '',
    department: ''
})

const handleChange = e => {
    setSignup({
        ...signup,
        [e.target.name]: e.target.value

    })
}


const handleSubmit = e => {
    e.preventDefault();
    axios
        .post("http://localhost:5200/api/auth/register", signup)
        .then(res => {
           console.log(res)
            localStorage.setItem('token', res.payload)
            props.history.push('/login');
           
        })
        .catch(err => console.log("From Register", err))
}

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form2" autoComplete="off">
                <input
                    type="text"
                    name="username"
                    value={signup.username}
                    onChange={handleChange}
                    placeholder="Enter Username"
                />
                <input
                    type="password"
                    name="password"
                    value={signup.password}
                    onChange={handleChange}
                    placeholder="Enter Password"
                />
                <input
                    type="department"
                    name="department"
                    value={signup.department}
                    onChange={handleChange}
                    placeholder="Enter Department"
                />
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;

import React, { useState, useEffect } from 'react';
import User from './User'
import { axiosWithAuth } from "../utils/axiosWithAuth"

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUserData = () => {
            axiosWithAuth()
            .get('/api/users/')
            .then(res => {
                console.log(res)
                setUsers(res.data)
            })
            .catch(err => {
                console.log("Something went wrong", err)
            })
        }

        getUserData()
       
    }, [])
    //console.log(data)
    return (
        <div className="users">
            {/* <h1>Users DB</h1> */}
            <p className="users-text">USERS</p>
            <div className="users-container">
                {users.map(item => (
                    <User key={item.id} user={item} />
                ))}
            </div>
        </div>
    )
}

export default Users;
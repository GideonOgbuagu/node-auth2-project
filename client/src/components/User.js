import React from 'react'

const User = (props) => {
    return (
        <div className="user">
            <h2 className="user-header">{props.user.username}</h2>
            <p className="user-department">{props.user.department}</p>
        </div>
    )
}

export default User;
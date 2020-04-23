import React, { useEffect } from 'react'

const Signout = () => {

    const signedOut = () => {
        localStorage.clear()
    }
    
    useEffect(() => {
        signedOut()
    }, []);

    return (
        <div className="signout">

            <h1>Thank you for visiting</h1>
            <p className="signout-text">You have been successfully Logged out!</p>
            
        </div>
    )
}

export default Signout;

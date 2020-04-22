import React, { useEffect } from 'react'

const Signout = () => {

    const signedOut = () => {
        localStorage.clear()
    }
    
    useEffect(() => {
        signedOut()
    }, []);

    return (
        <div>
            <p>Thank you for visiting</p>
            <p>You have been successfully Logged out!</p>
            
        </div>
    )
}

export default Signout;

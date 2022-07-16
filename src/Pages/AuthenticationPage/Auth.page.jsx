import React from 'react';
import LogIn from '../../Components/LogIn/LogIn.component';
import SignIn from '../../Components/SignIn/SignIn.component';
import "./Auth.style.css"

function AuthenticationPage() {
    return (
        <div className='auth-page'>
            <LogIn />
            <SignIn />
        </div>
    );
}

export default AuthenticationPage;
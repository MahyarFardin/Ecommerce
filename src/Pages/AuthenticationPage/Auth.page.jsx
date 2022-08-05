import React from 'react';
import LogIn from '../../Components/LogIn/LogIn.component';
import SignIn from '../../Components/SignIn/SignIn.component';
import "./Auth.style.css"

function AuthenticationPage() {
    return (
        <div className='auth-page'>
            <div>
                <h3>First time visiting our website?</h3>
                <p>You can sign up from this form</p>
                <SignIn />
            </div>
            <div>
                <h3>Do you have account?</h3>
                <p>If you have, you can log into it from this form</p>
                <LogIn />
            </div>
        </div>
    );
}

export default AuthenticationPage;
import React from 'react';

//-------------------------------------------------------------
//  Login/create account Page
//-------------------------------------------------------------
const Login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        handleLogout,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;

    return ( <section className = "login" >
        
        <div className="loginContainer">
        <h1>AUDEE-O</h1>
            <label>Email</label>
            <input type="text" autoFocus required value={email} onChange = {(e) => setEmail(e.target.value)}/>
            <p className="errorMsg">{emailError}</p>
            <label>Password</label>
            <input type="password" required value={password} onChange = {(e) => setPassword(e.target.value)}/>
            <p className="errorMsg">{passwordError}</p>
            <div className = "btnContainer">
                {hasAccount ? (
                    <>
                    <button onClick={handleLogin}>Sign in</button>
                    <p>Don't have an Account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                    </>
                ) : (
                    <>
                    <button onClick = {handleSignup}>Sign up</button>
                    <p>Have an Account? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                    </>
                )}
            </div>
        </div>

        </section>
    )
}

export default Login;

import React, {useState, useEffect} from "react";
import './App.css';
import fire from './fire';
import Login from './components/Login'
import Home from './components/Home'

const App = () => {
  //initialize states and set to empty
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);



  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }


  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

//function for the login part
const handleLogin = () => {
  clearErrors();
 fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
        switch(err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
              setEmailError(err.message);
              break;
          case "auth/wrong-password":
              setPasswordError(err.message);
              break;
          
        }
    });
  };




//function for the signup part
const handleSignup = () => {
  clearErrors();
  fire
     .auth()
     .createUserWithEmailAndPassword(email, password)
     .catch(err => {
         switch(err.code) {
           case "auth/email-already-in-use":
           case "auth/invalid-email":
               setEmailError(err.message);
               break;
           case "auth/weak-password":
               setPasswordError(err.message);
               break;
         }
     });
 };



 //function that handles logout
const handleLogout = () => {
  fire.auth().signOut();
};


//listener to check if there is a user
const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
        if(user) {
          clearInputs();
          setUser(user);
        } else {
          setUser("");
        }
    });
};


useEffect(() => {
    authListener();
}, []);


  return (
    <div className="App">
      {user ? (
        <Home 
        handleLogout={handleLogout}
        />
      ) : (
        <Login 
        email={email}    
        setEmail={setEmail}    
        password ={password}    
        setPassword = {setPassword}   
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
    />)}
    </div>
  );
}

export default App;

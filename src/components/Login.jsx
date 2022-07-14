import './components.css';
import { useState, useEffect } from 'react';

import {auth} from '../firebase-config';

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

function Login () {

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
    }, []);

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState ("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState ("");

    const [user, setUser] = useState({})


    // onAuthStateChanged(auth, (currentUser) => {
    //     setUser(currentUser);
    // });


    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }

    };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <div className='login-div'>
            <div className='register-user'>
                <h3>Register</h3>
                <input placeholder='Email' onChange={(e) => {setRegisterEmail(e.target.value)}} />
                <input type='password' placeholder='Password' onChange={(e) => {setRegisterPassword(e.target.value)}} />
                <button onClick={register}>Create User</button>
            </div>
            <div className='login-user'>
                <h3>Login</h3>
                <input placeholder='Email' onChange={(e) => {setLoginEmail(e.target.value)}} />
                <input type='password' placeholder='Password' onChange={(e) => {setLoginPassword(e.target.value)}} />
                <button onClick={login}>Login</button>
                <p>Welcome, {user?.email}</p>
                <button onClick={logout}>Sign Out</button>
            </div>
        </div>
    )
}


export default Login;
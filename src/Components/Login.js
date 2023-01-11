import { Button } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth, provider } from './firebase';

import "./Login.css"
const Login = () => {
    const dispatch = useDispatch()

    const signIn =() =>{
        auth.signInWithPopup(provider)
        .then(({user})=>{
            dispatch(login({
                displayName:user.displayName,
                email:user.email,
                photoUrl:user.photoURL
            }))
        })
        .catch(error => alert(error.message))
    };
  return (
    <div className='login'>
        <div className='login__container'>
        <img 
        src="https://blog.logomyway.com/wp-content/uploads/2021/02/gmail-logo.jpg"
        alt="" />
        <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
        </div>
        </div>
  );
}

export default Login
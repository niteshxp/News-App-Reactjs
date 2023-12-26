import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase"
const Login = () => {
    const [isSignUpForm, setIsSignUpForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        if (message) return

        if (isSignUpForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "->" + errorMessage)
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "->" + errorMessage)
                });
        }


    }

    const toggleSignInForm = () => {
        setIsSignUpForm(!isSignUpForm);
    }

    return (
        <div>
            <Header />
            <form onSubmit={(e) => e.preventDefault()}
                className='w-3/12 mt-28 mx-auto rounded-lg bg-black bg-opacity-70 border border-red-600'>
                <h1 className='font-semibold text-3xl py-4 text-center' >{isSignUpForm ? "Sign Up" : "Sign In"}</h1>
                {isSignUpForm &&
                    <input
                        className='mx-7 px-10 py-4 text-center my-4 bg-gray-700 rounded-lg text-white'
                        placeholder='Full Name'
                        type='text'
                        ref={name}
                    />
                }
                <input
                    className='mx-7 px-10 py-4 text-center my-4 bg-gray-700 rounded-lg text-white'
                    placeholder='Email Address'
                    type='email'
                    ref={email}
                />
                <input
                    className='mx-7 px-10 py-4 text-center my-4 bg-gray-700 rounded-lg text-white'
                    placeholder='Password'
                    type='password'
                    ref={password}
                />
                <button
                    className='w-11/12 mx-4 px-10 text-xl font-medium p-2 bg-red-700 rounded-lg'
                    onClick={handleButtonClick}
                >{isSignUpForm ? "Sign Up" : "Log In"}</button>
                <p className='py-2 text-center text-red-400'>{errorMessage}</p>
                <p
                    onClick={toggleSignInForm}
                    className='text-center mb-4 cursor-pointer text-gray-300'
                >{isSignUpForm ? "Already Registered! Sign In Now" : "New to NewsDekho? Sign Up Now"}</p>
            </form>
        </div>
    )
}

export default Login
import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(false);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <form onSubmit={(e) => e.preventDefault()}
                className='w-3/12 mt-28 mx-auto rounded-lg bg-black bg-opacity-70 border border-red-600'>
                <h1 className='font-semibold text-3xl py-4 text-center' >{isSignInForm ? "Sign Up" : "Sign In"}</h1>
                {isSignInForm &&
                    <input
                        className='mx-7 px-10 py-4 text-center my-4 bg-gray-700 rounded-lg'
                        placeholder='Full Name'
                        type='text'
                    />
                }
                <input
                    className='mx-7 px-10 py-4 text-center my-4 bg-gray-700 rounded-lg'
                    placeholder='Email Address'
                    type='email'
                />
                <input
                    className='mx-7 px-10 py-4 text-center my-4 bg-gray-700 rounded-lg'
                    placeholder='Password'
                    type='text'
                />
                <button className='w-11/12 mx-4 px-10 text-xl font-medium p-2 bg-red-700 rounded-lg'>{isSignInForm ? "Sign Up" : "Log In"}</button>
                <p
                    onClick={toggleSignInForm}
                    className='text-center py-4 cursor-pointer text-gray-300'
                >{isSignInForm ? "Already Registered! Sign In Now" : "New to NewsDekho? Sign Up Now"}</p>
            </form>
        </div>
    )
}

export default Login
import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from "../store/userSlice"
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((store) => store.user)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                navigate("/browse")
            } else {
                dispatch(removeUser())
                navigate("/")
            }
        });
    }, [])

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            // An error happened.
            // console.log("error")
        });

    }

    return (
        <div className='w-[90%] flex justify-between bg-black text-white my-2 mx-auto py-4 px-2 rounded-lg border border-red-400'>
            <a href='/'>
                <h1 className='text-3xl italic font-bold '>NewsDekho</h1>
            </a>
            <h2 className='text-xl font-medium mx-4 py-1 cursor-pointer'
                onClick={handleSignOut}
            >
                {user && "Sign Out"}
            </h2>
        </div>
    )
}

export default Header
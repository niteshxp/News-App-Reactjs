import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from "../store/userSlice"
import { updateGrid } from "../store/gridSlice"
import { useNavigate } from 'react-router-dom'
import { showSavedNews } from '../store/savedNewsSlice'

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((store) => store.user)
    const isSaveNews = useSelector((store) => store.saveNews.showSavedNews)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                navigate("/browse")
            } else {
                dispatch(removeUser())
                navigate("/")
            }
        });
        return () => unsubscribe;
    }, [])

    const handleGridView = () => {
        dispatch(updateGrid())
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
        });
    }
    const handleSavedNews = () => {
        dispatch(showSavedNews())
    }
    return (
        <div className='w-[90%] flex justify-between bg-black text-white my-2 mx-auto py-4 px-2 rounded-lg '>
            <a href='/'>
                <h1 className='text-3xl italic font-bold '>NewsDekho</h1>
            </a>
            <div className='flex'>

                <h2 className='text-xl font-medium mx-4 py-1 cursor-pointer'
                    onClick={handleSavedNews}>
                    {user && (isSaveNews ? 'Homepage' : 'Saved News')}
                </h2>

                <h2 className='text-xl font-medium mx-4 py-1 cursor-pointer'
                    onClick={handleGridView}
                >
                    {user && "Grid View"}
                </h2>

                <h2 className='text-xl font-medium mx-4 py-1 cursor-pointer'
                    onClick={handleSignOut}
                >
                    {user && "Sign Out"}
                </h2>
            </div>
        </div>
    )
}

export default Header
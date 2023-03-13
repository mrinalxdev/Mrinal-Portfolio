import React from 'react'
import { Link } from 'react-router-dom' 
import { auth } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'

const Navbar = () => {

  const [user] = useAuthState(auth)

  const signUserOut = async () => {
    await signOut(auth)
  }
 

  return (
    <div className="bg-black text-white p-5 mb-4">
      <div className="flex justify-evenly items-center">
        <Link to="/"> Home </Link>
        {!user ? (
        <Link to="/login">Login</Link>
        ) : (
        <Link to="/createpost">Create Post</Link>
        )}

      {user && (
        <>
          <div>
            <p>{user?.displayName}</p>
          </div>

          <button onClick={signUserOut}>Logout</button>
        </>
      )}
      </div>
    </div>
  )
}

export default Navbar
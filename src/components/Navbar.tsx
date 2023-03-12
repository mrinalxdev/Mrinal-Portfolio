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
    <div>
      <Link to="/"> Home </Link>
      <Link to="/login">Login</Link>

      {user && (
        <>
          <div>
            <p>{user?.displayName}</p>
          </div>

          <button onClick={signUserOut}>Logout</button>
        </>
      )}
    </div>
  )
}

export default Navbar
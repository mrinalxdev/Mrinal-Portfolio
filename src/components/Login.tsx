import React from 'react'
import { auth, provider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'

const Login = () => {

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider)
    console.log(result)

    return 
  }

  return (
    <div className="text-center">
        <p>SignIn With Google to continue</p>
        <button onClick={signInWithGoogle} className="border-2 border-black p-3 rounded-lg mt-4">Sign In With Google</button>
    </div>
  )
}

export default Login
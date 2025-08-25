import React, { useState } from 'react'

const Login = ({handleLogin}) => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

    return (
        <div className='flex items-center justify-center h-screen w-screen'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='flex flex-col items-center justify-center'>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent' type="email" placeholder='Enter your email' />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent mt-3' type="password" placeholder='Enter password' />
                    <button className='bg-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none border-none mt-5'>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login
import React, { useState, useEffect } from 'react'
import { getLocalStorage } from '../../utils/localStorage'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [credentials, setCredentials] = useState({ employees: [], admin: [] })

  useEffect(() => {
    const { employees, admin } = getLocalStorage()
    setCredentials({ employees, admin })
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-950 text-white">
      {/* Left side - Available Logins */}
      <div className="border-2 border-emerald-600 p-8 rounded-xl w-[350px] mr-10 bg-gray-900">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Available Logins</h2>
        <p className="mb-2"><b>Admin:</b> admin@me.com / 123</p>
        {credentials.employees.map((emp, i) => (
          <p key={i} className="mb-1">
            <b>{emp.firstname}:</b> {emp.email} / {emp.password}
          </p>
        ))}
      </div>

      {/* Right side - Login Form */}
      <div className="border-2 border-emerald-600 p-10 rounded-xl w-[400px] bg-gray-900">
        <h1 className="text-2xl font-semibold text-center mb-5 text-emerald-500">
          Employee Management System
        </h1>

        <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent w-full"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent mt-3 w-full"
            type="password"
            placeholder="Enter password"
          />
          <button className="bg-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none border-none mt-5 w-full">
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login

import React from 'react'

const Header = (props) => {

  const logoutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium' >Hello <br /> <span className='text-3xl font-semibold'>{props.data?.firstname || "User"} ✌</span></h1>
      <button onClick={logoutUser} className='bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header

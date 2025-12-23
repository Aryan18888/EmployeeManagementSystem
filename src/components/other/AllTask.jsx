import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const AllTask = () => {

    const [userData] = useContext(AuthContext)

  return (
    <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>

        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded '>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>
        
        <div className=''>
            {userData.map(function(e,i){

            return <div key={i} className='border-2 border-gray-700 mb-2 py-2 px-4 flex justify-between rounded '>
            <h2 className='text-lg font-medium w-1/5'>{e.firstname}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-400'>{e.taskCount.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-300'>{e.taskCount.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-green-600'>{e.taskCount.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'>{e.taskCount.failed}</h5>
        </div>
        })}
        </div>

    </div>
  )
}

export default AllTask

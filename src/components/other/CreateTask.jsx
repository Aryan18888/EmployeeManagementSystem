import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [assignToId, setAssignToId] = useState('')
    const [category, setCategory] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()

        const newTask = { title, description, date, category, active: false, newTask: true, completed: false, failed: false }

        const data = userData ? [...userData] : []
        const targetId = assignToId ? parseInt(assignToId) : null
        data.forEach(function (e) {
            if (targetId && targetId === e.id) {
                e.tasks.push(newTask)
                e.taskCount.newTask = e.taskCount.newTask + 1
            }
        })
        setUserData(data)

        setTitle('')
        setDescription('')
        setDate('')
        setAssignToId('')
        setCategory('')

    }

    return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }}
                className='flex flex-wrap w-full items-start justify-between '>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design' /></div>
                    <div><h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={date}
                            onChange={(e) => {
                                setDate(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" /></div>
                    <div><h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <div className='relative w-4/5 mb-4'>
                            <select
                                value={assignToId}
                                onChange={(e) => {
                                    setAssignToId(e.target.value)
                                }}
                                className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 appearance-none'
                            >
                                <option value=''>Select Employee</option>
                                {userData?.map((emp) => (
                                    <option key={emp.id} value={emp.id}>{emp.firstname}</option>
                                ))}
                            </select>
                            <span className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'>▼</span>
                        </div>
                    </div>
                    <div> <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <div className='relative w-4/5 mb-4'>
                            <select
                                value={category}
                                onChange={(e) => {
                                    setCategory(e.target.value)
                                }}
                                className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 appearance-none'
                            >
                                <option value=''>Select Category</option>
                                <option>Design</option>
                                <option>Development</option>
                                <option>Testing</option>
                                <option>Documentation</option>
                                <option>Deployment</option>
                                <option>Bug Fix</option>
                                <option>DevOps</option>
                                <option>Security</option>
                            </select>
                            <span className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'>▼</span>
                        </div>
                    </div>
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols="30" rows="10"></textarea></div>

                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
            </form>
        </div>
    )
}

export default CreateTask

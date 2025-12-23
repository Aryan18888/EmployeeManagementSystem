import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    const [userData, setUserData] = useContext(AuthContext)

    const updateTask = (taskIndex, status) => {
        if (!userData || !data) return
        const list = [...userData]
        const idx = list.findIndex((e) => e.id === data.id)
        if (idx === -1) return
        const emp = { ...list[idx] }
        const tasks = [...emp.tasks]
        const t = { ...tasks[taskIndex] }
        const prev = { ...t }

        if (status === 'accept') {
            t.active = true
            t.newTask = false
        } else if (status === 'complete') {
            t.completed = true
            t.active = false
            t.newTask = false
            t.failed = false
        } else if (status === 'fail') {
            t.failed = true
            t.active = false
            t.newTask = false
            t.completed = false
        }

        tasks[taskIndex] = t

        const count = { ...emp.taskCount }
        if (prev.newTask && !t.newTask) count.newTask = Math.max(0, count.newTask - 1)
        if (!prev.active && t.active) count.active = count.active + 1
        if (prev.active && !t.active) count.active = Math.max(0, count.active - 1)
        if (!prev.completed && t.completed) count.completed = count.completed + 1
        if (!prev.failed && t.failed) count.failed = count.failed + 1

        emp.tasks = tasks
        emp.taskCount = count
        list[idx] = emp
        setUserData(list)
    }

    return (
        <div id='tasklist' className='h-[50%] flex gap-5 justify-start w-full py-5 overflow-x-auto mt-10 flex-nowrap'>
           
          {data.tasks.map((e,i)=>{
            
            if(e.active){
               return <AcceptTask key={i} data={e} onComplete={() => updateTask(i,'complete')} onFail={() => updateTask(i,'fail')}/>
            }
            if(e.newTask){
                return <NewTask key={i} data={e} onAccept={() => updateTask(i,'accept')}/>
            }
            if(e.completed){
                return <CompleteTask key={i} data={e}/>
            }
            if(e.failed){
                return <FailedTask key={i} data={e}/>
            }


          })}

        </div>
    )
}

export default TaskList

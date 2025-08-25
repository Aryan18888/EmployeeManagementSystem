import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    console.log(data)
    return (
        <div id='tasklist' className='h-[50%] flex gap-5 justify-start w-full py-5 overflow-x-auto mt-10 flex-nowrap'>
           
          {data.tasks.map((e,i)=>{
            
            if(e.active){
               return <AcceptTask key={i} data={e}/>
            }
            if(e.newTask){
                return <NewTask key={i} data={e}/>
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
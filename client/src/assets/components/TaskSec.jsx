import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TaskSec = ({task}) => {

  const navigate = useNavigate()

    let handleClick=(slug)=>{
        navigate(`/task/${slug}`)
    }
    let handleDel=(slug)=>{
        axios.delete(`http://localhost:3002/tasks/${slug}`)
        .then((response)=>{
            console.log(response.data.message);
            fetchTask()
        })
    }
  
    return (
      <li key={task.id} className="bg-[#393c3f] w-72 p-4 mb-2 shadow-md rounded ">
      <h2 className="text-2xl font-semibold">{task.title}</h2>
      <p className='truncate'>{task.description}</p>
   <button 
   onClick={()=>{handleClick(task.id)}}  className='underline text-blue-300 mr-2'>
    Edit</button>
   <button 
   onClick={()=>{handleDel(task.id)}}  className='underline text-red-300 mr-2'>
    Delete</button>
    </li>
    );
}

export default TaskSec
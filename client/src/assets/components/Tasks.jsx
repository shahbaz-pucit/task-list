import React, { useEffect, useState } from 'react'
// import TaskItem from './TaskItem';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TaskSec from './TaskSec';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate()
    const fetchTask = ()=>{
        axios.get('http://localhost:3002/tasks')
        .then(response => setTasks(response.data))
        .catch(error => console.error('Error fetching tasks:', error));
    }

    useEffect(() => {
     fetchTask()
    }, []);

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

    const handlePost =()=>{
        navigate('/create-task')
    }
  
    return (
      <div className="w-full min-h-screen text-white text-center">
        <h1 className="text-3xl font-bold mb-4 mt-32" >Welcome to the Task List</h1>
        <button className='bg-blue-500 text-white py-2 px-4 rounded mt-1 mb-7' onClick={handlePost}>Create a new task</button>
        <ul className='flex justify-center align-middle gap-3 text-left flex-wrap'>
          {tasks.map(task => (
          
              <TaskSec task={task} />


          ))}
        </ul>
      </div>
    );
}

export default Tasks
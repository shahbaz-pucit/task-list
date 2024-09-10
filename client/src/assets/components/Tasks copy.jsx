import React, { useEffect, useState } from 'react'
// import TaskItem from './TaskItem';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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


          ))}
        </ul>
      </div>
    );
}

export default Tasks
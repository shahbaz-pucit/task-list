import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    let [task, setTask] = useState(null);
    let [title, setTitle] = useState('')
    let [description, setDescription] = useState('')

    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:3002/tasks/${id}`)
        .then((response)=>{
            setTask(response.data)
            setTitle(response.data.title)
            setDescription(response.data.description)
        })
        .catch(error => console.error(error)
        )
    },[])

    const handleUpdate = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:3002/tasks/${id}`, {title, description})
        .then((response)=>{
            console.log(`updated ${title}`);
            navigate('/')
            
        }).catch(err => console.error(err)
         )
    }



  return (
    <div className="w-full min-h-screen p-10 text-white text-center ">
    <h1 className="text-3xl font-bold mb-4 mt-32" >Editing {title}</h1>
    <div className="uForm w-full flex justify-center">

    <form onSubmit={handleUpdate} className='text-left w-[23rem] p-7 bg-zinc-700 rounded-md' >

        <label htmlFor="title"  className='block'> Title</label>
        <input type="text" id='title' name='title' className='bg-[#27292C] block w-full outline-none p-2 mb-3 mt-1 rounded-md' value={title} onChange={(e)=>{
            console.log(e.target.value);
            setTitle(e.target.value)
        }} />

      
        

        <label htmlFor="description" className='block'> Description</label>
        <input type="text" id='description' name='description' className='bg-[#27292C] block outline-none p-2 mb-3 mt-1 w-full rounded-md'  value={description} onChange={(e)=>{
            console.log(e.target.value);
            
            setDescription(e.target.value)
        }} />
        <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded mt-1'> Update</button>
    </form>
    </div>
   </div>
  )
}

export default Update
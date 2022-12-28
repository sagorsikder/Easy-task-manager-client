import React from 'react';
import useTitle from '../../Hooks/useTitle';

const AddTask = () => {
    useTitle('add task');

    const handleForm=(event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email= form.email.value;
        const taskDetails = form.task.value;
        const date = form.date.value;
       const task = {
        name,email,taskDetails,date
       }

        fetch('http://localhost:5000/addtask',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(task)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            if(result.acknowledged){
                alert('Add task successfully')
                form.reset();
                
            }
        })
        .catch(err=>console.error(err))
        console.log(task)
    }
    return (
        <div className='bg-blue-500'>
            <h1 className='text-center lg:text-5xl font-bold  text-white pt-10'>Add any task </h1>

            <form className='flex w-3/4 mx-auto flex-col' onSubmit={handleForm}>
                <label className='text-white font-semibold my-2'>Name</label>
                <input className='mb-2  p-2 rounded' type="text" placeholder='Enter your name' name="name" />
                <label className='text-white font-semibold my-2'>Email</label>
                <input className='mb-2  p-2 rounded'  type="email" name="email" placeholder='Enter your email' />
                <label className='text-white font-semibold my-2'>Date</label>
                <input className='mb-2  p-2 rounded'  type="date" name="date"/>
                <label className='text-white font-semibold my-2'>Task description</label>
                <input className='mb-2 p-2 rounded h-[100px]' type="text" name="task" placeholder='Enter your task'/>
                <div className='pb-10 w-full flex justify-center mt-3'><input className=' bg-green-500 hover:bg-green-800 text-white p-2 rounded'  type="submit" value="Submit" /></div>
            </form>
        </div>
    );
};

export default AddTask;
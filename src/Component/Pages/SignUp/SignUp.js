import  {React, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';


const SignUp = () => {

    const{createUser} = useContext(AuthContext)
    const navigate = useNavigate();

    useTitle('signup')
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignUpForm = event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)

        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
      navigate(from,{replace:true})
      form.reset()
        })
        .catch(err=>console.error(err))



       
    }

    return (
      <div className=" w-full flex flex-col my-5 lg:flex-row">
    <div className="text-center my-5 lg:w-1/2 lg:text-left">
      
      <img  src='https://th.bing.com/th/id/R.0bfb188ab99a5c96e0902ef48dace5bc?rik=hvv7LwqmLhW1Tw&riu=http%3a%2f%2fgocommunityapp.com%2fwp-content%2fuploads%2f2016%2f01%2fsign_up_blue.png&ehk=UjZZaJ6QTrbazF2XH8GvVJmBMRraWCJWg6gCF2P0LC0%3d&risl=&pid=ImgRaw&r=0'  className='h-full w-full p-3 '  alt="" />
    </div>
    <div className=" flex-shrink-0 lg:w-1/2 flex justify-center my-5 py-5 max-w-sm shadow-2xl ">
      <div className='w-4/5 mx-auto' >

      <h1 className="text-5xl text-center mb-10 font-bold">SignUp now!</h1>
        <form className='flex flex-col' onSubmit={handleSignUpForm} >

        
                <label className=' font-semibold my-2'>Name</label>
                <input className='mb-2  p-2 rounded'  type="text" name="name" placeholder='Enter your name' />
                <label className=' font-semibold my-2'>Email</label>
                <input className='mb-2  p-2 rounded'  type="email" name="email" placeholder='Enter your email' />
                <label className=' font-semibold my-2'>Password</label>
                <input className='mb-2  p-2 rounded' type="password" placeholder='Enter your password' name="password" />

                <div className='pb-1 w-full flex justify-center mt-3'><input className=' bg-green-500 hover:bg-green-800  p-2 rounded w-full font-semibold'  type="submit" value="SignUp" /></div>
       
        </form>
        <p className='font-semibold'>Already sign up? let's go <button className='text-green-600 hover:text-green-800 '><Link to='/login'>login</Link></button></p>

           
      </div>
    </div>
  </div>
     );
};

export default SignUp;
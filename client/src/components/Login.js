import React from 'react'

const Login = () => {
  return (
    <body>
            <div className='flex justify-center items-center h-screen bg-slate-200 flex-col'>
            <h2 className='mb-6 text-blue-700 text-5xl text-semibold'>TrueColors</h2>
            <div id='form' className=' bg-slate-50 py-8  rounded-xl shadow-md shadow-slate-300 w-1/3 flex justify-center items-center'>
            <form action="" >
                <h2 className='text-black text-lg text-center mb-4'>Log in to TrueColors</h2>
                <div className='flex flex-col'>
                <input type='email' className='mb-4  h-12 w-full
                 rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm placeholder:text-lg' id='email' placeholder='Email address'></input> 
                <input type='password' className='h-12 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm placeholder:text-lg mb-4' id='password' placeholder='Password'></input>
                <input type='submit' className=' bg-blue-700 w-full h-12 cursor-pointer text-white  border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm mb-2 hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 text-sm rounded-md border' id='signUp'></input>  
                </div>
                <div className='flex justify-center'>
                <a href="#" className='text-blue-600 mr-4' >Forgotten password?</a>
                <a href="#" className='text-blue-600'>sign up for TrueColors</a>
                </div>
            </form>
            </div>
        </div>
    </body>
    
  )
}

export default Login
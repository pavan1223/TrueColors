import React from 'react'

const SignUp = () => {
  return (
    <body>
        <div className='flex justify-center items-center h-screen bg-slate-200  '  >
            <div id='form' className='block bg-slate-50 p-6 rounded-xl shadow-md shadow-slate-300 w-1/3'>
             <form action="">
                <h2 className='text-blue-700 text-3xl font-semibold my-4'>Register</h2>
                <div id='fullName' className='flex flex-row'>
                    <div id='firstName' className='w-1/2 mr-1'>
                      <label for='fname' className="text-sm">First Name</label>
                      <input type='text' className='h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm' id='fname'></input>  
                    </div>
                    <div id='lastName'>
                      <label for='lname' className="text-sm">Last Name</label>
                      <input type='text' className='h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm' id='lname'></input>  
                    </div>
                </div>
                <label for='email' className="text-sm">Email</label>
                <input type='email' className='h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm' id='email'></input> 

                <label for='password' className="text-sm">Password</label>
                <input type='password' className='h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm' id='password'></input>

                <label for='confirmPassword' className="text-sm">Confirm Password</label>
                <input type='password' className='h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm mb-2' id='confirmPassword'></input>     

                <input type='submit' className='bg-blue-700 w-full h-10 cursor-pointer text-white wounded-md hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 text-sm' id='signUp'></input>  <br></br>
                <p class="text-xs my-2">Already have an account?<a href="#" className='text-blue-600'>Login</a></p>   

                </form>   
            </div>
        </div>
    </body>
    
  )
}

export default SignUp
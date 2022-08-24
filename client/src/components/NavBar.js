import React from 'react'

const NavBar = () => {
  return (
    <div>
        <body className = 'bg-indigo-500 text-white'>
            <nav className='relative container p-4 mx-auto'>
                <div className='flex items-center justify-between'>
                    <p className='text-white text-2xl'>
                        TrueColors
                    </p>
                    <div>
                    <button className="p-2 text-xl text-white  hover:bg-white hover:text-black">Sign Up</button>
                    <button className="p-2 text-xl  hover:bg-white hover:text-black">Log-in</button>
                    <button className="p-2 text-xl hover:bg-white hover:text-black"><img src='./imgs/cart.svg' alt='cart'></img> cart</button>
                    <button className="p-2 text-xl  hover:bg-white hover:text-black"><img src='./imgs/menu.svg' alt='more'></img> more</button>
                    </div>
                </div>

            </nav>

        </body>
    </div>
  )
}

export default NavBar
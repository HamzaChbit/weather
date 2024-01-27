import React from 'react'

const Cart = ({wind,image,title}) => {
  return (
    <div  className='inline mx-3 text-white ' >
            <div className='bg-white/40  text-center  rounded-lg flex  flex-col  w-[250px]  px-2 py-5 '>
          
           <div  className='flex flex-row items-center justify-around ' >
            <div className='flex flex-col py-1' >
                <h1>{title}</h1>
             <h1>{wind}</h1>
            </div>
               
          <div className='text-blue-500 ' >
           {image}
       
           </div>
        </div>

    </div>
    </div>

  )
}

export default Cart
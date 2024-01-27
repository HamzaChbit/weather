import React from 'react'

export const Details = ({ipWeather}) => {
  return (


    <div  className='flex  flex-col justify-center items-center w-full  text-white py-8 mt-5' >
      <div  className='flex items-center' >
        <h1  className='text-2xl font-semibold' >5-day forecast</h1>
      </div>

   <div className=' flex flex-row justify-between overflow-x-auto  scrollbar 
 scrollbar-track-blue-380 scrollbar-thumb-white/50 py-2  h-full  w-full   ' >
{ipWeather.forecast?.forecastday.map((day,index)=>(
<div  className='inline  mx-2' >
    <div key={index} className='bg-white/40    text-center  rounded-lg flex  flex-col w-[200px] md:mx-2 mx-2 px-8 py-2'>
           <p>{new Date(day.date).toLocaleString('en-us',{weekday:'short'})}</p> 
           <div  className='flex flex-row items-center px-2 ' >
           <img src={day.day.condition.icon} alt={day.day.condition.text} />   
   
            
      
           </div>
           <div className='block'   >
            <p>H {day.day.maxtemp_c.toFixed()}°</p>
            <p>L {day.day.mintemp_c.toFixed()}°</p>
           </div>
        

    </div>
</div>
   

 

))}
    </div>

         



    </div>


  )
}
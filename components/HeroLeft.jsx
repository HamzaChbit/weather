
import React from 'react';

export const HeroLeft = ({ ipWeather }) => {
 
  const desiredHours = ["06:00","08:00", "10:00", "12:00", "16:00", "18:00", "20:00", "22:00"];

  // Filter the hours based on the desired hours
  const filteredHours = ipWeather.forecast?.forecastday[0].hour.filter(hour => {
    const hourTime = hour.time.split(' ')[1];
   
    return desiredHours.includes(hourTime);
  });




  return (

   <div  className='flex flex-col justify-center my-2 w-full md:w-[68%] ' >
<div  className='w-full flex py-2 justify-center '  >
    
    <h1 className='text-white text-2xl font-bold '  >24-hour forecast</h1>
</div>
 <div className=' text-white overflow-x-auto  scrollbar 
 scrollbar-track-blue-380 scrollbar-thumb-white/50 py-2 block cursor-pointer '>
     
        <div  className='flex flex-row md:gap-4  gap-2 w-full' >
         
        {filteredHours.map((hour, index) => (
              <div key={index} className='bg-white/40 px-5  py-1 font-semibold rounded-lg   flex flex-col w-full '>

                <h6>{hour.time.slice(10,16)}</h6>
                <div  className='flex flex-row items-center' > 
                   <h3 className='font-semibold' >{hour.temp_c}°</h3>
                    <img src={hour.condition.icon} alt={hour.condition.text}  />



              
          
                </div>
                <h4  className='text-md' >Humid:{hour.humidity}%</h4>
                <h4  className='text-md' >Vent:{hour.wind_kph}km/h</h4>
               
              </div>
         ))}
        </div>
    

   




    </div>

   </div>
          
    
 
  );
};

// import React from 'react';

// export const HeroLeft = ({ ipWeather }) => {
//   const desiredHours = ["08:00", "10:00", "12:00", "16:00", "18:00", "20:00", "22:00"];

//   // Filter the hours based on the desired hours
//   const filteredHours = ipWeather.forecast?.forecastday[0].hour.filter(hour => {
//     const hourTime = hour.time.split(' ')[1];
//     return desiredHours.includes(hourTime);
//   });

//   return (
//     <div className='flex flex-col justify-center my-2 w-full md:w-[68%] '>
//       <div className='w-full flex py-2 justify-center '>
//         <h1 className='text-white text-2xl font-bold'>24-hour forecast</h1>
//       </div>
//       <div className='text-white overflow-x-auto scrollbar scrollbar-track-blue-380 scrollbar-thumb-white/50 py-2 block cursor-pointer '>
//         {filteredHours.map((hour, index) => (
//           <div key={index}>
//             <h1>{hour.temp_c}</h1>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


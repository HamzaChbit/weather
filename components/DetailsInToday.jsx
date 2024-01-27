import React from 'react'
import Cart from './Cart.jsx'
import { MdOutlineWindPower } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { BsSpeedometer } from "react-icons/bs";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import { MdOutlineAir } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";
import { BsThermometerHalf } from "react-icons/bs";
export const DetailsInToday = ({ipWeather}) => {
  return (


    <div  className='flex flex-col justify-center items-center w-full  text-white  ' >
      <div  className='flex items-center' >
        <h1  className='text-2xl font-semibold' >Weather Details</h1>
      </div>

   <div className=' flex   overflow-x-auto  scrollbar 
 scrollbar-track-blue-380 scrollbar-thumb-white/50 py-2    w-full    ' >


     <div  className=' text-center font-semibold rounded-lg flex  flex-row w-full md:mx-5 mx-2 px-5 py-5'>
          
    <Cart wind={`${ipWeather.current?.wind_mph.toFixed()} mph`} title='Wind Speed' image={<BsSpeedometer size={25}/>} />
    <Cart wind={`${ipWeather.current?.humidity.toFixed()}%`} title='Humidity' image={<WiHumidity size={35} />} />


    <Cart wind={ipWeather.current?.wind_dir} title='Wind Direction' 
    image={<MdOutlineWindPower size={25}/>}  />
    <Cart wind={ipWeather.forecast?.forecastday[0].astro.sunrise} title='Sunrise' image={<FiSunrise size={25} />} />
    <Cart wind={ipWeather.forecast?.forecastday[0].astro.sunset} title='Sunset'
    image={<FiSunset size={25} />}  />
    <Cart wind={`${ipWeather.current?.feelslike_c}°`} title='Feel Like' 
    image={<BsThermometerHalf size={25} />}  />
    <Cart wind={`${ipWeather.current?.pressure_mb} hPa`} title='Air Pressure' image={<MdOutlineAir size={25}/>} />
    <Cart wind={`${ipWeather.current?.vis_km} km`} title='Visibility' 
    image={<MdOutlineVisibility size={25}/>} />
                
                
    
          </div>
           </div>
        

   

 


    </div>

         






  )
}
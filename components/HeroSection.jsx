import { FaMapMarkerAlt } from "react-icons/fa";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { FaTemperatureArrowDown } from "react-icons/fa6";
export const HeroSection = ({ ipWeather,today}) => {

const WeatherIcon = ipWeather.current?.condition?.icon

  return (
    <div  className="text-white text-xl  " >




      <h1 className=""  >Today</h1>
      <h1>{today}</h1>
      {  WeatherIcon && (

        <div  className="flex flex-col  " >
             <div className="flex flex-row items-center  " >  
                 <img src={`https:${WeatherIcon}`} alt={ipWeather.current?.condition?.text}  /> 
                  <h1>{ipWeather.current?.temp_c.toFixed()}°</h1>  
                  </div> 
                 
       
                
        </div>
      
      ) }
         
  
   
        
   
  
       <div  className="inline-block w-full gap-x-5  " >
<div  className="flex md:flex-col  flex-row  md:items-start  items-center   " >
    <div className="flex flex-row   items-center gap-x-1   mr-5   " >
            
         {ipWeather.forecast?.forecastday[0].day.maxtemp_c.toFixed()}<FaTemperatureArrowUp className="text-red-400"/>
   <FaTemperatureArrowDown />    
   {ipWeather.forecast?.forecastday[0].day.mintemp_c.toFixed()}  
                  </div>
         


         <div className="border-2  flex md:flex-row    items-center gap-x-2 py-1 px-2 rounded-lg" >
       <FaMapMarkerAlt />
        <h1 className="font-medium" >{ipWeather.location?.name}</h1>

       </div>

</div>
       

    
       </div>
      
      
       </div>
   
  );
};
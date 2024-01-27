'use client'
import React, { Suspense, useEffect, useState } from 'react';

import SearchManufacturer from './SearchManufacturer.jsx';
import moment from 'moment';
import axios from 'axios';
import { HeroSection } from './HeroSection.jsx';
import { HeroLeft  } from './HeroLeft.jsx';
import {Details  } from './Details.jsx';
import {DetailsInToday  } from './DetailsInToday.jsx';
import { motion } from 'framer-motion'
import Image from 'next/image.js';




const Hero = () => {

  const [ipAddress, setIpAddress] = useState('');
  const [ipWeather, setIpWeather] = useState('');
  const [geoInfo, setGeoInfo] = useState({});
const [today,setToday] = useState('')
const [selected, setSelected] = useState(null);



useEffect(() => {
  const storedValue = localStorage.getItem('selected');
  if (storedValue) {
    setSelected(JSON.parse(storedValue));
  }
}, []);

useEffect(() => {
  const getVisitorIP = async () => {

    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      const data = response.data;
      setIpAddress(data.ip);
      fetchIPInfo(data.ip); // Call fetchIPInfo after obtaining the IP address
    } catch (error) {
      console.error('Failed to fetch IP:', error);
    }
  };

  const fetchIPInfo = async (ip) => {

    try {
      const response = await axios.get(`https://ipapi.co/${ip}/json/`);
      const data = response.data;
      setGeoInfo(data);
      
    } catch (error) {
      console.error('Failed to fetch IP info:', error);
    }
  };

  getVisitorIP();
}, []);




  const updateTime = () => {
    const t = moment();
       setToday(t.format('dddd, ll'));
      
   }
   
   setInterval(updateTime,1000)

   const fetchWeather = async () => {
    try {
      if (selected && selected.name) {
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_URL}&q=${selected.name}&days=3&aqi=yes&alerts=no`);
        const data = response.data;
        setIpWeather(data);
       
      } else {
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_URL}&q=${geoInfo.city}&days=3&aqi=yes&alerts=no`);
        const data = response.data;
        setIpWeather(data);
 
      }
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
   
    }
  };



  
  
  useEffect(() => {
 
      fetchWeather();
    
  }, [selected, geoInfo]);
  

  useEffect(() => {
    if (selected) {
      localStorage.setItem('selected', JSON.stringify(selected));
    }
  }, [selected]);











 
  

  
 
  return (
    

    <>
      {ipWeather ? (
        <div className='max-w-[1280px] w-auto mx-auto h-auto my-0'>
          <div className='w-full flex flex-row py-2 items-center md:justify-around justify-between px-4'>
            <div className='flex flex-row items-center'>
              <Image src='/images/Logo.png' width={60} height={60} alt='Logo' />
              <h1 className='text-white font-semibold text-xl md:block hidden'>
                Weather app
              </h1>
            </div>
            <SearchManufacturer selected={selected} setSelected={setSelected} />
          </div>

          <motion.div     initial={{y:-20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.6,delay:0.5}} className='flex flex-col md:flex-row justify-around md:items-center items-start mx-8'>
            <HeroSection  
           
             ipWeather={ipWeather}
              today={today} />
            <HeroLeft  ipWeather={ipWeather} today={today} />
          </motion.div>
          <motion.div  initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.8,delay:0.8}} >
    <DetailsInToday 
          ipWeather={ipWeather} />
          <Details 
          ipWeather={ipWeather} />
          </motion.div>
      
        </div>
      ) : (
        <>
          <div className='h-screen w-full bg-feature-bg  bg-cover bg-center    flex items-center justify-center text-white'>
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        </>
      )}
    </>


   











   
  );
};

export default Hero;
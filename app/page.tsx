import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className='bg-feature-bg w-full  h-full   md:h-screen     bg-cover bg-center   overflow-x-hidden overflow-y-scroll scrollbar 
    scrollbar-track-blue-380 scrollbar-thumb-white/50  ' >
      <Hero/>
    </div>
  );
}

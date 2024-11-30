// import React from 'react'
// import bawpic from '../assets/bawpic.jpeg'
// import TextChange from './TextChange'


// function Home() {
//   return (
//     <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
//       <div className='md:w-2/4 md:pt-10'>
//       <h1 className='text-3xl md:text-6xl font-bold flex leading-normal -tracking-tight '>
//         <TextChange/>
//       </h1>
//        <p className='text-sm md:text-2xl leading-tight tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum beatae, repellendus accusamus suscipit dicta necessitatibus deleniti corporis </p>
//        <button className='mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Contact me</button>
//       </div>
//        <div><img className='' src={bawpic} alt="" /></div>

//     </div>
//   )
// }

// export default Home


import React from 'react';
import bawpic from '../assets/bawpic.jpeg';
import TextChange from './TextChange';

function Home() {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20">
      {/* Text Section */}
      <div className="md:w-2/4 text-center md:text-left md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tight mb-4">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl leading-tight tracking-tight mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum beatae,
          repellendus accusamus suscipit dicta necessitatibus deleniti corporis.
        </p>
        <button className="mt-5 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact me
        </button>
      </div>

      {/* Animated Border with Static Image */}
      <div className="relative flex items-center justify-center mt-8 md:mt-0">
        {/* Rotating and Shape-Changing Border */}
        <div className="absolute animate-spin-slow-shape-change rounded-full border-2 md:border-2 border-dashed border-white w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 border-[1px] border-dashed gap-4"></div>

        {/* Static Image */}
        <div className="rounded-full bg-black p-2">
          <img
            className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 shadow-lg object-cover"
            src={bawpic}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;



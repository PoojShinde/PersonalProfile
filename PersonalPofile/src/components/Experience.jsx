// import React from 'react';
// import { FaHtml5, FaCss3, FaJs, FaReact, FaGoogle } from 'react-icons/fa';
// import { SiExpress } from 'react-icons/si';  // Correct import for Express icon
// // import { SiNodejs } from 'react-icons/si';
// import tcs from '../assets/tcs.png'
// import hcl from '../assets/hcl.png'
// import perception from '../assets/perc.jpeg'
// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// function Experience() {
//     useEffect(() => {
//         AOS.init({
//           duration: 1000, // Animation duration in ms
//           easing: 'ease-in-out',
//           once: true, // Make the animation run once
//         });
//       }, []);




//   return (
//     <div id="Experience" className="p-10 md:p-24">
//       <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
//       <div className="flex flex-wrap items-center justify-around">
//         <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <FaHtml5 color="#E34F26" size={50} />
//           </span>

//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <FaCss3 color="#1572b6" size={50} />
//           </span>

//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <FaReact color="#61DBFB" size={50} />
//           </span>

//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <FaJs color="#F7DF1E" size={50} />
//           </span>

//           {/* <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//              <SiNodejs color="#8CC84B" size={50} />

//           </span> */}

//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <SiExpress color="white" size={50} />  {/* Correct usage of SiExpress */}
//           </span>
//         </div>

//         <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
//         <div className='flex gap-8 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
//         <img src={tcs} alt="Company Logo" size={50} className=" w-20 h-20 " /> {/* Adjust the size as needed */}

//             <span className='text-white'>
//                 <h2 className='leading-tight'>Assistant software engineer, TCS</h2>
//                 <p className='text-sm leading-tight' >May 2023 - Present</p>
//                 <ul className='text-sm p-2'>
//                      <li>Work as software developer</li>
//                      <li>Seniour sde in TCS</li>
//                 </ul>
//             </span>
//         </div>
//         <div className='flex gap-8 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
//         <img src={hcl} alt="Company Logo" size={50} className=" w-20 h-15 " /> {/* Adjust the size as needed */}
//             <span className='text-white'>
//                 <h2 className='leading-tight'>Assistant software engineer, TCS</h2>
//                 <p className='text-sm leading-tight' >May 2023 - Present</p>
//                 <ul className='text-sm p-2'>
//                      <li>Work as software developer</li>
//                      <li>Seniour sde in TCS</li>
//                 </ul>
//             </span>
//         </div>
//         <div className='flex gap-8 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
//         <img src={perception} alt="Company Logo" size={50} className=" w-20 h-15 " />

//             <span className='text-white'>
//                 <h2 className='leading-tight'>Assistant software engineer, TCS</h2>
//                 <p className='text-sm leading-tight' >May 2023 - Present</p>
//                 <ul className='text-sm p-2'>
//                      <li>Work as software developer</li>
//                      <li>Seniour sde in TCS</li>
//                 </ul>
//             </span>
//         </div>

//         </div>
        
                
//       </div>
//     </div>
//   );
// }

// export default Experience;

import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaGoogle } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import tcs from '../assets/tcs.png'
import hcl from '../assets/hcl.png'
import perception from '../assets/perc.jpeg'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Fade from 'react-reveal/Fade';  // Import React Reveal Fade for animations

function Experience() {
    useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration in ms
        easing: 'ease-in-out',
        once: true, // Make the animation run once
      });
    }, []);
  
    return (
      <div id="Experience" className="p-10 md:p-24">
        <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
        <div className="flex flex-wrap items-center justify-around">
          <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
            {/* Add Fade animation to each icon */}
            <Fade bottom>
              <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                <FaHtml5 color="#E34F26" size={50} />
              </span>
            </Fade>
            <Fade bottom delay={100}>
              <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                <FaCss3 color="#1572b6" size={50} />
              </span>
            </Fade>
            <Fade bottom delay={200}>
              <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                <FaReact color="#61DBFB" size={50} />
              </span>
            </Fade>
            <Fade bottom delay={300}>
              <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                <FaJs color="#F7DF1E" size={50} />
              </span>
            </Fade>
            <Fade bottom delay={400}>
              <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                <SiExpress color="white" size={50} />
              </span>
            </Fade>
          </div>
  
          <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
            {/* Wrap each company block with React Reveal Fade */}
            <Fade bottom>
              <div className="flex gap-8 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                <img src={tcs} alt="Company Logo" size={50} className="w-20 h-20" />
                <span className="text-white">
                  <h2 className="leading-tight">Assistant Software Engineer, TCS</h2>
                  <p className="text-sm leading-tight">May 2023 - Present</p>
                  <ul className="text-sm p-2">
                    <li>Work as a software developer</li>
                    <li>Senior SDE at TCS</li>
                  </ul>
                </span>
              </div>
            </Fade>
  
            <Fade bottom delay={100}>
              <div className="flex gap-8 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                <img src={hcl} alt="Company Logo" size={50} className="w-20 h-15" />
                <span className="text-white">
                  <h2 className="leading-tight">Assistant Software Engineer, HCL</h2>
                  <p className="text-sm leading-tight">May 2023 - Present</p>
                  <ul className="text-sm p-2">
                    <li>Work as a software developer</li>
                    <li>Senior SDE at HCL</li>
                  </ul>
                </span>
              </div>
            </Fade>
  
            <Fade bottom delay={200}>
              <div className="flex gap-8 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                <img src={perception} alt="Company Logo" size={50} className="w-20 h-15" />
                <span className="text-white">
                  <h2 className="leading-tight">Assistant Software Engineer, Perception</h2>
                  <p className="text-sm leading-tight">May 2023 - Present</p>
                  <ul className="text-sm p-2">
                    <li>Work as a software developer</li>
                    <li>Senior SDE at Perception</li>
                  </ul>
                </span>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
  
  export default Experience;
  
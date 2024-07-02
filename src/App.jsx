import {  useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import bike from "./assets/Triumph-Speed-400.png"
import phone from "./assets/phone-screen-with-abstract-marble-aesthetic.png"
import sofa from "./assets/sofa.png"
import boy from "./assets/3d-rendering-kid-playing-online.png"
import girl from "./assets/7450220.png"
import { Link } from 'react-router-dom'
const imagesData = [
  {
    url:bike,
    title:"Triumph Motorcycles Clone",
    link:"https://github.com/go-rahul-go/triumph-motorcycles-clone",
    website:"https://triumph-motorcycles-clone.vercel.app/"
  }, 
  {
    url:phone,
    title:"iQOO Clone",
    link:"https://github.com/go-rahul-go/iqoo-india-clone",
    website:"https://iqoo-india-clone.vercel.app/"
  }, 
  {
    url:sofa,
    title:"Furniture Store",
    link:"https://github.com/go-rahul-go/bansal-furnitures",
    website:"https://bansal-furnitures.vercel.app/"

  }, 
  {url:boy,
    title:"Data Scientist Portfolio",
    link:"https://github.com/go-rahul-go/iqoo-india-clone",
    website:"https://iqoo-india-clone.vercel.app/"
  }, 
  {
    url:girl,
    title:"Data Analyst Portfolio",
    link:"https://github.com/go-rahul-go/iqoo-india-clone",
    website:"https://iqoo-india-clone.vercel.app/"
  }
]

function App() {
  const r = useRef();
  const { scrollYProgress } = useScroll({ target: r });
  const left = useTransform(scrollYProgress, [0, 1], [(window.innerWidth/3), -(window.innerWidth - 400)])

  return (
    <section className='w-[100%] h-[3000px] bg-gray-50  relative overflow-x-clip no-scrollbar' ref={r}>
      <h1 className='px-2 py-5 text-3xl capitalize font-semibold'>Modern Projects section</h1>
      <div className='w-[100%] h-[72vh] sticky  top-[17vh]  flex no-scrollbar' >
        <motion.div className='h-[70vh]  flex justify-start absolute left-[300px] gap-7 items-center  px-2' style={{ left: left }} >
          {
            imagesData.map((item, index) => {
              return (
                <PorjectCard imageUrl={item.url} key={index} title={item.title} github={item.link} website={item.website}/>
              )
            })
          }
        </motion.div>
      </div>

    </section>
  )
}

export default App



function PorjectCard({ imageUrl,title ,github,website}) {
  return (
    <div className='w-[27vw] h-[60vh] flex-shrink-0  bg-gray-200 rounded-xl relative shadow1'>
      <div className='absolute w-[100%] h-[65%]  translate-y-[-40%] '>
        <img src={imageUrl} alt="" className='w-[100%] h-[100%] object-contain' />
      </div>
      <div className='w-[100%] h-[50%]  absolute bottom-0 px-3'>
        <h2 className='text-2xl font-semibold  text-gray-600'>{title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, laborum.</p>
        <div className='w-[100%]  mt-5 flex justify-between items-center'>
          <Link className='w-[48%] p-1 bg-gray-700 flex justify-center items-center text-gray-100 capitalize font-semibold rounded hover:outlinig1' to={github}>github</Link>
          <Link className='w-[48%] p-1 bg-blue-500 flex justify-center items-center text-gray-100 capitalize font-semibold rounded hover:outlinig2' to={website}>visit</Link>
        </div>
      </div>
    </div>
  )
}
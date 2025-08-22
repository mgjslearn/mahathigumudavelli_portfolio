import React from 'react'
import Button from "../components/ui/button";
import {FiDownload} from "react-icons/fi"
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
import MahaBot from '@/components/MahaBot'; // Import the new component

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm <br /> <span className="text-purple-500  ">Mahathi Gumudavelli</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">I have a background in Computer Science with a focus in Artificial Intelligence and Cybersecurity. I'm proficient in various programming languages and technologies. 
              I enjoy data and AI engineering/analysis, full stack development,  MLSecOps/Data governance,and product management.  </p>
          {/* btn and socials */}
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
              <span>Download Resume</span>
              <FiDownload className="text-xl"/>
            </Button>
            <div className="mb-8 xl:mb-0">
              <Social 
                containerStyles="flex gap-6" 
                iconStyles="w-10 h-10 flex items-center justify-center rounded-full border text-purple-500 border-purple-500 hover:bg-purple-500 hover:text-black transition duration-200"
              />
            </div>
          </div>
          </div>
          {/* photo */}
          <div className="mx-auto mt-8 xl:self-start xl:mt-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      
      {/* Add Maha Bot - it will appear as a floating chat button */}
      <MahaBot />
    </section>
  )
}

export default Home;
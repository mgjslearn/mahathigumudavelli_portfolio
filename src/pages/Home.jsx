import {useState, Suspense} from 'react'

import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'
import StudyRoom from '../models/StudyRoom';
import Sky from '../models/Sky';
import HomeInfo from '../components/HomeInfo';
import BriefcaseRoom from '../models/BriefcaseRoom';
import PhoneModel from '../models/TelephoneModel';

const Home = () => {
   const[isRotating,setIsRotating] = useState(false);
  const[currentStage, setCurrentStage] = useState(1)

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [ 0,-6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    }
    else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  }
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition ;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition= [1, 6, 0];
    }
    else {
      screenScale = [3, 3, 3];
      screenPosition= [1, 6, -4];
    }
    return [screenScale, screenPosition];
  }

  return (
    <section className ="w-full h-screen relative">
        <div className = "absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
            {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>

       <Canvas 
          className = {`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
          camera = {{ near: 0.1, far: 1000}}
        >

        <Suspense fallback ={<Loader />}>
         <directionalLight position={[1,1,1]} intensity = {2}/>
         <ambientLight  intensity={0.5}/>
         <hemisphereLight skyColor="#b1e1ff" groundColor = "#000000" intensity = {1}/>
        
        <StudyRoom 
         position = {[3, -10.6, -28.5]}
         scale = {[10, 8, 8]}
         rotation = {[0, 6.3, 0]}
         isRotating = {isRotating}
         setIsRotating = {setIsRotating}
         setCurrentStage = {setCurrentStage}
        />

      
        <Sky />
     
        </Suspense>

        </Canvas>
    </section>
  )
}
export default Home;
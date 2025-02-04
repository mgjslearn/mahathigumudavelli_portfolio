import { Link } from "react-router-dom";
import {projects} from '../constants';
import CTA from '../components/CTA';
import { arrow } from "../assets3/icons";
const Projects = () => {
  return (
    <section className='max-container'>
    <h1 className='head-text'>
      My
      <span className='blue-gradient_text font-semibold drop-shadow'>
        {" "}
        Projects
      </span>{" "}
     
    </h1>

    <div className='mt-5 flex flex-col gap-3 text-slate-500'>
      <p>
       These are some projects exploring my diverse skill set. I enjoy learning coding through the process of making different projects
       on topics of my interest. Throughout the following projects I have explored python, android studio, tailwindcss and react.js, javafx and more!
       If you have any ideas for projects and would love to work on it together, feel free to contact me!
      </p>
    </div>

    <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
            
               
              </div>
            </div>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
               
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;
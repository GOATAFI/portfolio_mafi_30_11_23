import { FaMedal } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { Link, animateScroll as scroll } from 'react-scroll';

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <div className="navbar bg-base-100 mt-8 sm:mt-16 px-4 sm:px-36 flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <button onClick={scrollToTop} className="btn btn-ghost text-2xl sm:text-5xl">Nahid Parvez Mafi</button>
        </div>
        <div className="flex flex-col sm:flex-row">
          <Link to="about" smooth={true} duration={1000} className="btn btn-ghost text-sm sm:text-xl mx-2">About</Link>
          <Link to="experience" smooth={true} duration={1000} className="btn btn-ghost text-sm sm:text-xl mx-2">Experience</Link>
          <Link to="projects" smooth={true} duration={1000} className="btn btn-ghost text-sm sm:text-xl mx-2">Projects</Link>
          <Link to="contact" smooth={true} duration={1000} className="btn btn-ghost text-sm sm:text-xl mx-2">Contact</Link>
        </div>
      </div>

      <div id="home" className="mt-8 sm:mt-36 flex flex-col sm:flex-row justify-center items-center">
        <div className="mb-8 sm:mb-0">
          <img
            src="./profile-pic-3.png"
            alt=""
            className="rounded-full w-48 h-48 sm:w-96 sm:h-96 object-cover"
          />
        </div>
        <div className='ml-4 sm:ml-12 text-center'>
          <p className='text-sm sm:text-lg text-gray-600 font-semibold'>Hello, I'm</p>
          <p className='text-3xl sm:text-6xl mt-2 sm:mt-4 font-extrabold'>Nahid Parvez Mafi</p>
          <p className='text-xl sm:text-3xl text-gray-600 mt-2 sm:mt-6 font-bold'>Junior Frontend Developer</p>
          <div className='mt-4 sm:mt-8'>

            <button className="btn mr-4 sm:mr-8 rounded-md sm:rounded-3xl"> <a href="https://github.com/GOATAFI/nahid_cv_30_11_23/blob/main/resume-mafi-portfolio.pdf?raw=true"> Download CV </a></button>
            <Link to="contact" smooth={true} duration={1000} > <button className="btn btn-neutral rounded-md sm:rounded-3xl">Contact Info</button> </Link>
          </div>
        </div>
      </div>

      <div id="about" className='justify-center text-center mt-12 sm:mt-24'>
        <p className='text-gray-500'>Get to know more</p>
        <p className='font-bold text-3xl sm:text-5xl'>About Me</p>
      </div>

      <div className="mt-36 flex flex-col sm:flex-row">
        <img className="h-1/4 w-1/4 ml-4 sm:ml-28 rounded-3xl sm:w-96 sm:h-96" src="./profile-pic-4_Mirror.png" alt="" />
        <div className="text-center ml-4 sm:ml-8">
          <div className="box-container flex ">
            <div className="box border border-black mr-4 sm:mr-7 ml-4 sm:ml-16 p-8 rounded-3xl flex flex-col items-center">
              <FaMedal className="text-2xl mb-4" />
              <h2 className="text-3xl font-bold mb-4">Experience</h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Doing MERN stack web development for nearly a year now. <br /> Still a fresher in this sector, want to gather experience.
              </p>
            </div>
            <div className="box border border-black ml-4 sm:ml-7 p-8 rounded-3xl flex flex-col items-center">
              <FaBook className="text-2xl mb-4" />
              <h2 className="text-3xl font-bold mb-4">Education</h2>
              <p className="text-xs sm:text-sm text-gray-600">
                B.Sc in Information and Communication Engineering <br />
                2020 - Current <br />
                Bangladesh University of Professionals
              </p>
            </div>
          </div>
          <div className="mt-4 sm:mt-5 mr-4 sm:mr-6">
            <p>I am Nahid Parvez Mafi, a proactive BSc student majoring in Information & Communication Engineering, deeply passionate about web development. Proficient in HTML, CSS, and JavaScript, with a focus on React, I am an adept learner eager to further my skills through hands-on experience. Actively seeking an internship to apply my knowledge in a practical setting, I bring a strong commitment to continuous improvement, attention to detail, and a problem-solving mindset. Excited about the opportunity to contribute to impactful projects and collaborate with seasoned professionals, I am ready to make a meaningful impact in a dynamic tech environment.</p>
          </div>
        </div>
      </div>

      <div id="experience" className='justify-center text-center mt-8 sm:mt-24'>
        <p className='text-gray-500'>Explore my</p>
        <p className='font-bold text-5xl'>Experience</p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center sm:justify-between">
        <div className="flex flex-col items-center mb-4">
          <FaHtml5 className="text-3xl"></FaHtml5>
          <p>HTML</p>
        </div>
        <div className="flex flex-col items-center mb-4">
          <IoLogoCss3 className="text-3xl"></IoLogoCss3>
          <p>CSS</p>
        </div>
        <div className="flex flex-col items-center mb-4">
          <IoLogoJavascript className="text-3xl"></IoLogoJavascript>
          <p>JavaScript</p>
        </div>
        <div className="flex flex-col items-center mb-4">
          <FaReact className="text-3xl"></FaReact>
          <p>React</p>
        </div>
        <div className="flex flex-col items-center mb-4">
          <SiTailwindcss className="text-3xl"></SiTailwindcss>
          <p>Tailwind</p>
        </div>

        {/* Second partition */}
        <div className="flex flex-col items-center mb-4">
          <FaBootstrap className="text-3xl"></FaBootstrap>
          <p>Bootstrap</p>
        </div>
        <div className="flex flex-col items-center mb-4">
          <FaNode className="text-3xl"></FaNode>
          <p>Node JS</p>
        </div>
        <div className="flex flex-col items-center mb-4">
          <SiExpress className="text-3xl"></SiExpress>
          <p>Express</p>
        </div>
        <div className="flex flex-col items-center mb-4">
          <SiMongodb className="text-3xl"></SiMongodb>
          <p>MongoDB</p>
        </div>
        <div className="flex flex-col items-center mb-4">
          <FaGithub className="text-3xl"></FaGithub>
          <p>Github</p>
        </div>
      </div>


      <div id="projects" className='justify-center text-center mt-8 sm:mt-24 mb-7'>
        <p className='text-gray-500'>Browse my recent</p>
        <p className='font-bold text-5xl'>Projects</p>
      </div>

      <div className="flex flex-col sm:flex-row">
        <div className="card w-full sm:w-1/2 bg-base-100 shadow-xl ml-4 sm:ml-6 mr-4 sm:mr-6 mt-4 sm:mt-7">
          <figure>
            <img src="./hero_gadget_pic.png" className="rounded-xl" style={{ width: '100%' }} alt="Hero Gadget" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Hero Gadget</h2>
            <p>An E-commerce site for futuristic techs</p>
            <div className="card-actions">
              <a href="https://github.com/GOATAFI/HeroGadget"> <button className="btn btn-ghost bg-slate-200 rounded-2xl">Github</button> </a>
              <a href="https://herogadget.netlify.app/"> <button className="btn btn-ghost bg-slate-200 rounded-2xl">Live Demo</button> </a>
            </div>
          </div>
        </div>

        <div className="card w-full sm:w-1/2 bg-base-100 shadow-xl ml-4 sm:ml-6 mr-4 sm:mr-6 mt-4 sm:mt-7">
          <figure>
            <img src="./chef_site_pic.png" className="rounded-xl" style={{ width: '100%' }} alt="MR. Chef" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">MR. Chef</h2>
            <p>A site for managing chefs & their secret recipes</p>
            <div className="card-actions">
              <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-GOATAFI/tree/main"> <button className="btn btn-ghost bg-slate-200 rounded-2xl">Github</button> </a>
              <a href="https://chefs-website-be82e.web.app/"> <button className="btn btn-ghost bg-slate-200 rounded-2xl">Live Demo</button> </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row">
        <div className="card w-full sm:w-1/2 bg-base-100 shadow-xl ml-4 sm:ml-6 mr-4 sm:mr-6 mt-4 sm:mt-7">
          <figure>
            <img src="./Ema_john_pic.png" className="rounded-xl" style={{ width: '100%' }} alt="Ema John" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Ema John</h2>
            <p>An E-commerce site which is definitely not copied from Amazon</p>
            <div className="card-actions">
              <a href="https://github.com/GOATAFI/ema-john-with-firebase-auth"> <button className="btn btn-ghost bg-slate-200 rounded-2xl">Github</button> </a>
              <a href="https://ema-john-with-firebase-a-36daa.web.app/"> <button className="btn btn-ghost bg-slate-200 rounded-2xl">Live Demo</button> </a>
            </div>
          </div>
        </div>

        <div className="card w-full sm:w-1/2 bg-base-100 shadow-xl ml-4 sm:ml-6 mr-4 sm:mr-6 mt-4 sm:mt-7">
          <figure>
            <img src="./toy_titans_pic.png" className="rounded-xl" style={{ width: '100%' }} alt="Toy Titans" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Toy Titans</h2>
            <p>A toy heaven for your precious toys</p>
            <div className="card-actions">
              <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-GOATAFI"> <button className="btn btn-ghost bg-slate-200 rounded-2xl">Github</button> </a>
              <a href="https://the-toy-titans.web.app/"> <button className="btn btn-ghost bg-slate-200 rounded-2xl">Live Demo</button> </a>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className='justify-center text-center mt-8 sm:mt-40 mb-7'>
        <p className='text-gray-500'>Get in touch</p>
        <p className='font-bold text-5xl'>Contact Me</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-4 sm:mt-7 mb-10">
        <MdOutlineMailOutline className="text-3xl" />
        <p className="font-bold text-lg sm:text-xl ml-2">nahidparvezmafi@gmail.com</p>
        <a href="https://www.facebook.com/nahidparvez.mafi.9/"><FaFacebook className="text-3xl ml-2"></FaFacebook></a>
        <a href="https://www.facebook.com/nahidparvez.mafi.9/"> <p className="ml-2">Facebook</p></a>
      </div>
    </>
  );
}

export default App;

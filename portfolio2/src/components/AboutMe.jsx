import {useState} from "react";

function AboutMe() {
  const [mySummary, setMySummary] = useState(false)
    return (
        <>
        <article
            id="about"
            className="bg-[url('./Me.jpg')] lg:bg-[center_65%] bg-[length:75%] sm:bg-[center_60%] sm:bg-[length:100%]   rounded-lg h-150 col-span-full"
          >
            <p className="animate-fadeIn4 text-8xl font-semibold p-5 ">
              ABOUT <br></br> ME
            </p>
            <p className="animate-fadeIn3 absolute lg:left-2 italic lg:top-410 sm:top-525 w-150 text-2xl p-5">Gauteng, South Africa</p>

            <p className="animate-fadeIn3 absolute right-9 top-300 w-150 lg:text-2xl p-5 sm:hidden lg:block ">
               I'm a passionate Full Stack Developer with a foundation in both
              frontend and backend technologies. I specialize in building
               responsive, user-focused web applications using HTML, CSS,
               Tailwind CSS, JavaScript, and frameworks like React and Node.js.
               On the backend, I work with databases like PostgreSQL
               and I'm comfortable handling APIs, authentication, and server-side
               logic.<br></br>
               <br></br>
               Beyond code, I care deeply about clean design, performance, and
               solving real-world problems through technology. I've collaborated
               on projects that range from improving company websites to building
               systems from scratch, and I enjoy taking ownership from concept to
               deployment.
             </p>
            <button
            className="animate-fadeIn3 absolute right-9 top-530 bg-zinc-400 dark:bg-zinc-800 text-gray-800 dark:text-white p-2 rounded-lg hover:bg-zinc-500 dark:hover:bg-zinc-700 transition-colors duration-300 z-10 cursor-pointer lg:hidden"
            onClick={() => {
             return setMySummary(!mySummary);
            }}
            >{!mySummary ? "More" : "Less" }</button>
            {mySummary ? <p className="backdrop-blur-3xl   animate-fadeIn3 absolute mx-3 top-415 w-fit  rounded-lg text-2xl py-15 p-5 sm:text-xl ">
              I am, a passionate Full Stack Developer with a foundation in both
              frontend and backend technologies. I specialize in building
              responsive, user-focused web applications using HTML, CSS,
              Tailwind CSS, JavaScript, and frameworks like React and Node.js.
              On the backend, I work with databases like PostgreSQL
              and I'm comfortable handling APIs, authentication, and server-side
              logic.<br></br>
              <br></br>
              Beyond code, I really care deeply about clean design, performance, and
              solving real-world problems through technology. I've collaborated
              on projects that range from improving company websites to building
              systems from scratch, and I enjoy taking ownership from concept to
              deployment. 
            </p>: ""
            
            }
          </article>
        </>
    )
}

export default AboutMe;
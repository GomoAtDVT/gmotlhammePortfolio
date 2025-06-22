import React from "react";

function AboutMe() {
    return (
        <>
        <article
            id="about"
            className="bg-[url('./Me.jpg')] bg-[center_65%] bg-[length:75%]  rounded-lg h-150 col-span-full"
          >
            <p className="animate-fadeIn4 text-8xl font-semibold p-5 ">
              ABOUT <br></br> ME
            </p>
            <p className="animate-fadeIn3 absolute right-9 top-300 w-150 text-2xl p-5 ">
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
          </article>
        </>
    )
}

export default AboutMe;
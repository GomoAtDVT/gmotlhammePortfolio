import React from "react";

function TechnologiesCarousel() {


    const technologies = [
        {
            name: "JavaScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
            name: "Git",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
            name: "React",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            name: "PostgreSQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
            name: "Tailwind CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
            name: "Node.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
            name: "HTML5",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
            name: "CSS3",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
            name: "Figma",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        {
            name: "Azure",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        },
        {
            name: "GitHub",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        }
        
        
    ];

    
    return (
        <>

                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 flex flex-col items-center justify-center py-7 m-2 h-fit  bg-[url('/soft-performance.jpg')] dark:bg-[url('/dark3.jpg')] bg-cover bg-center rounded-lg">Technologies I Use</h2>
            <div id="technologies" className=" overflow-x-scroll hidescroll flex flex-col items-center justify-center py-7 m-2 h-fit  bg-[url('/soft-performance.jpg')] dark:bg-[url('/dark3.jpg')] bg-cover bg-center rounded-lg">
                <div className="animate-fullViewCarousel hidden md:hidden  lg:flex ml-25 ">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className={` w-32 h-32 flex flex-col items-center justify-center bg-zinc-400 dark:bg-zinc-800 m-4 rounded-lg opacity-90 shadow-lg `}
                        >
                            <img src={tech.icon} alt={tech.name} className="w-16 h-16" />
                            <p className="mt-2 text-center text-gray-800 dark:text-white">{tech.name}</p>
                        </div>
                    ))}
                </div>  
                <div className=" flex md:flex-row ml-350 lg:hidden">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className={` w-32 h-32 flex flex-col items-center justify-center bg-zinc-400 dark:bg-zinc-800 m-4 rounded-lg opacity-90 shadow-lg `}
                        >
                            <img src={tech.icon} alt={tech.name} className="w-16 h-16" />
                            <p className="mt-2 text-center text-gray-800 dark:text-white">{tech.name}</p>
                        </div>
                    ))}
                </div>  
            </div>
        </>
    );}

export default TechnologiesCarousel;
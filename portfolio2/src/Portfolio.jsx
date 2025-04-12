import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Portfolio() {
    const [phone, setPhone] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);

const sidebarBtn = ()=>{
    const sidebar = document.getElementById('sidebar')
    sidebar.classList.toggle('hidden')
    sidebar.classList.toggle('block')
}

const changeAppearence = () => {
    const root = document.documentElement;
    const toggleContainer = document.getElementById("toggle-container");
    toggleContainer.classList.toggle("invisible");
    toggleContainer.classList.toggle("visible");

}
const body = document.body;
const lightMode = () => {
    
    body.style.background = "black";
    body.style.color = "white";
}
const darkMode = () => {
    body.style.background = "white";
    body.style.color = "black";
}

    return (
    
    <>
        <header className='bg-white dark:bg-black p-5 m-2 rounded-lg h-170'>
            <section className='flex items-center justify-between p-5'>

                <div id='logo-light' className='hidden dark:block w-35 -mr-15'>
                <img src="./dark-logo.png" alt="logo" />
                </div>

                <div id='logo-dark' className='dark:hidden w-35  -mr-15'>
                <img src="./light-Logo.png" alt="logo" />
                </div>


            <nav className='dark:text-white hidden md:flex'>
                <ul className='flex gap-30 text-md font-semibold '>
                    <li className='hover:text-indigo-600 dark:hover:text-green-500'><a href="#services">SERVICES</a></li>
                    <li className='hover:text-indigo-600 dark:hover:text-green-500'><a href="#about">ABOUT</a></li>
                    <li className='hover:text-indigo-600 dark:hover:text-green-500'><a href="#projects">PROJECTS</a></li>
                    <li className='hover:text-indigo-600 dark:hover:text-green-500'><a href="#technologies">TECHNOLOGIES</a></li>
                </ul>
            </nav>

            <button onClick={sidebarBtn} className='dark:text-white text-3xl mb-1 cursor-pointer'>&#9776;</button>
            </section>

            <section id="sidebar" className=" hidden">

            <nav  className='bg-zinc-200  dark:bg-zinc-800 p-4 w-80 dark:text-white flex flex-col justify-end absolute top-10 right-10 z-2 '>
                <button onClick={sidebarBtn} className="flex justify-end m-4 cursor-pointer dark:font-light hover:text-indigo-600 dark:hover:text-green-500">CLOSE</button>
                <hr />
                <ul className='flex flex-col gap-10 m-4 my-5 text-md dark:font-light'> 
                    <li className='hover:text-indigo-600 dark:hover:text-green-500'><a onClick={sidebarBtn} href="#services">SERVICES</a></li>
                    <li className='hover:text-indigo-600 dark:hover:text-green-500'><a onClick={sidebarBtn} href="#about">ABOUT</a></li>
                    <li className='hover:text-indigo-600 dark:hover:text-green-500'><a onClick={sidebarBtn} href="#projects">PROJECTS</a></li>
                    <li className='hover:text-indigo-600 dark:hover:text-green-500'><a onClick={sidebarBtn} href="#technologies">TECHNOLOGIES</a></li>
                    <hr />
                
                    <div className="dark:font-light ">
                        
                        <button onClick={changeAppearence}  className="dark:font-light hover:text-indigo-600 dark:hover:text-green-500 cursor-pointer">APPEARENCE</button>
                        
                        <div  id="toggle-container" className="invisible mt-2">
                            <p onClick={lightMode} className="p-2 ml-7 hover:text-indigo-600 dark:hover:text-green-500 cursor-pointer">LIGHT</p>
                            <p onClick={darkMode} className="p-2 ml-7 hover:text-indigo-600 dark:hover:text-green-500 cursor-pointer">DARK</p>
                        </div>
                        
                    </div>
                </ul>
                
            </nav>
            </section>
            
            <section className='w-full h-full font-semibold dark:text-white'>
                <p className='mt-40'>PRODUCING <br></br>QUALITY VISUAL <br></br>REPRESENTATION</p>

                <p className='absolute left-90 bottom-40'>MAINTAINING DEDICATION <br></br>TO PROSPERITY</p>

                <h1 className='absolute text-8xl right-15 bottom-20'>REFLECTING <br></br>CONTINIOUS<br></br> GROWTH</h1>
            </section>
        </header>



        <main className=' dark:bg-transparent m-2 grid grid-cols-2 gap-5 mb-75'>

            {/* services section  */}
        <section id='services' className='flex rounded-lg justify-end p-5 font-semibold bg-white dark:bg-black dark:text-white h-110 text-5xl '>EXPLORE MY <br></br> SERVICES</section>


        <section className=' bg-transparent overflow-y-scroll hidescroll flex flex-col gap-2.5 h-110'>

            <div className='bg-white text-4xl hover:bg-linear-65 from-sky-500 to-indigo-500 duration-300 ease-in-out dark:text-white dark:bg-black dark:hidden w-full h-35 p-4 rounded-lg'>WEB DEVELOPMENT 
            <p className='text-lg flex justify-end mt-11 mr-4 gap-2 cursor-pointer dark:text-white'>LEARN MORE <i className="bi bi-arrow-up-right-square "></i></p></div>
            <div className='bg-white text-4xl hover:bg-linear-90 hidden from-black-500 to-green-600 duration-300 ease-in-out  dark:text-white dark:bg-black dark:block w-full h-35 p-4 rounded-lg'>WEB DEVELOPMENT <p className='text-lg flex justify-end mt-11 mr-4 gap-2 dark:text-white cursor-pointer'>LEARN MORE <i className="bi bi-arrow-up-right-square "></i></p></div>

            <div className='bg-white text-4xl hover:bg-linear-65 from-sky-500 to-indigo-500 duration-300 ease-in-out  dark:text-white dark:bg-black dark:hidden w-full h-35 p-4 rounded-lg'>FULL STACK DEVELOPMENT <p className='text-lg  flex justify-end mt-11 mr-4 gap-2 dark:text-white cursor-pointer'>LEARN MORE <i className="bi bi-arrow-up-right-square "></i></p></div>
            <div className='bg-white text-4xl hover:bg-linear-90 hidden from-black-500 to-green-600 duration-300 ease-in-out  dark:text-white dark:bg-black dark:block w-full h-35 p-4 rounded-lg'>FULL STACK DEVELOPMENT <p className='text-lg flex justify-end mt-11 mr-4 gap-2 dark:text-white cursor-pointer'>LEARN MORE <i className="bi bi-arrow-up-right-square "></i></p></div>

            <div className='bg-white text-4xl hover:bg-linear-65 from-sky-500 to-indigo-500 duration-300 ease-in-out  dark:text-white dark:bg-black dark:hidden w-full h-35 p-4 rounded-lg'>CYBERSECURITY <p className='text-lg flex justify-end mt-11 mr-4 gap-2 dark:text-white cursor-pointer'>LEARN MORE <i className="bi bi-arrow-up-right-square "></i></p></div>
            <div className='bg-white text-4xl hover:bg-linear-90 hidden from-black-500 to-green-600 duration-300 ease-in-out  dark:text-white dark:bg-black dark:block w-full h-35 p-4 rounded-lg'>CYBERSECURITY
            <p className='text-lg flex justify-end mt-11 mr-4 gap-2 dark:text-white cursor-pointer'>LEARN MORE <i className="bi bi-arrow-up-right-square "></i></p>
            </div>
            <div className='bg-white text-4xl hover:bg-linear-65 from-sky-500 to-indigo-500 duration-300 ease-in-out  dark:text-white dark:bg-black dark:hidden w-full h-35 p-4 rounded-lg'>CYBERSECURITY <p className='text-lg flex justify-end mt-11 mr-4 gap-2 dark:text-white cursor-pointer'>LEARN MORE <i className="bi bi-arrow-up-right-square "></i></p></div>
            <div className='bg-white text-4xl hover:bg-linear-90 hidden from-black-500 to-green-600 duration-300 ease-in-out  dark:text-white dark:bg-black dark:block w-full h-35 p-4 rounded-lg'>CYBERSECURITY
            <p className='text-lg flex justify-end mt-11 mr-4 gap-2 dark:text-white cursor-pointer'>LEARN MORE <i className="bi bi-arrow-up-right-square "></i></p>
            </div>
            <div className='bg-white text-4xl hover:bg-linear-65 from-sky-500 to-indigo-500 duration-300 ease-in-out  dark:text-white dark:bg-black dark:hidden w-full h-35 p-4 rounded-lg'>CYBERSECURITY <p className='text-lg flex justify-end mt-11 mr-4 gap-2 dark:text-white cursor-pointer'>LEARN MORE <i className="bi bi-arrow-up-right-square "></i></p></div>
            <div className='bg-white text-4xl hover:bg-linear-90 hidden from-black-500 to-green-600 duration-300 ease-in-out  dark:text-white dark:bg-black dark:block w-full h-35 p-4 rounded-lg'>CYBERSECURITY
            <p className='text-lg flex justify-end mt-11 mr-4 gap-2 dark:text-white cursor-pointer'>LEARN MORE <i className="bi bi-arrow-up-right-square "></i></p>
            </div>
            <div className='bg-white text-4xl hover:bg-linear-65 from-sky-500 to-indigo-500 duration-300 ease-in-out  dark:text-white dark:bg-black dark:hidden w-full h-35 p-4 rounded-lg'>CYBERSECURITY <p className='text-lg flex justify-end mt-11 mr-4 gap-2 dark:text-white cursor-pointer'>LEARN MORE <i className="bi bi-arrow-up-right-square "></i></p></div>
            <div className='bg-white text-4xl hover:bg-linear-90 hidden from-black-500 to-green-600 duration-300 ease-in-out  dark:text-white dark:bg-black dark:block w-full h-35 p-4 rounded-lg'>CYBERSECURITY
            <p className='text-lg flex justify-end mt-11 mr-4 gap-2 dark:text-white cursor-pointer'>LEARN MORE <i className="bi bi-arrow-up-right-square "></i></p>
            </div>
        </section>
        
        <article id='about' className='bg-white dark:bg-black rounded-lg h-150 col-span-full'>
            <p className='text-8xl font-semibold p-5 dark:text-white'>ABOUT <br></br> ME</p>
            <p className=' absolute right-10 top-300 w-150 text-2xl p-5 dark:text-white'>I'm a passionate Full Stack Developer with a foundation in both frontend and backend technologies. I specialize in building responsive, user-focused web applications using HTML, CSS, Tailwind CSS, JavaScript, and frameworks like React and Node.js. On the backend, I work with databases like MySQL, and PostgreSQL and I'm comfortable handling APIs, authentication, and server-side logic.<br></br><br></br>

Beyond code, I care deeply about clean design, performance, and solving real-world problems through technology. I've collaborated on projects that range from improving company websites to building systems from scratch, and I enjoy taking ownership from concept to deployment.</p>
        </article>

        <section id='projects-banner' className='bg-white dark:bg-black rounded-lg h-50 col-span-full flex justify-between p-5'>
            <p className='dark:text-white flex justify-end text-xl font-normal place-items-center h-full mt-12 '>BELOW ARE A FEW OF MY PROJECTS <br></br> TO PROVE MY CAPABILITIES</p>
            <p className='dark:text-white flex justify-end text-8xl font-semibold place-items-center pb-9 h-full'>PROJECTS</p>
        </section>

        <section id="projects" className='rounded-lg h-50 col-span-full grid grid-cols-3 gap-2'>
            <div className='bg-white dark:text-white dark:bg-black rounded-lg h-60 col-span-2'>b</div>
            <div className='bg-white dark:text-white dark:bg-black rounded-lg h-60'>b</div>
            <div className='bg-white dark:text-white dark:bg-black rounded-lg h-60'>b</div>
            <div className='bg-white dark:text-white dark:bg-black rounded-lg h-60 col-span-2'>b</div>
        </section>
        </main>

        <footer className=' h-max m-2 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white dark:bg-black p-4 rounded-lg'>
            <section className='bg-zinc-300 dark:bg-zinc-800 rounded-lg p-8 col-1 row-2 md:row-1'>
            <h1 className='dark:text-white text-4xl mb-7'>Ready to collaborate on converting your dream into reality</h1>
                <form action="" className='flex flex-col gap-5'>
                    
                    <div className='grid grid-cols-1 gap-4'>
                        <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor="first-name" className='dark:text-white'>First Name:</label>
                        <input placeholder="Greg" type="text" className='p-2 text-lg bg-white h-10 rounded inset-shadow-sm border border-zinc-200'/>
                        </div>

                        <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor="last-name" className='dark:text-white '>Last Name:</label>
                        <input placeholder="Smith" type="text" className='p-2 text-lg bg-white h-10 rounded inset-shadow-sm border border-zinc-200'/>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 w-full'>
    <label htmlFor="email" className='dark:text-white'>Email:</label>
    <input 
        type="email" 
        placeholder='jackson@gmail.com' 
        className='p-2 bg-white text-black h-10 rounded w-full inset-shadow-sm border border-zinc-200' 
    />
</div>

<div className='flex flex-col gap-2 w-full'>
    <label htmlFor="number" className='dark:text-white'>Phone Number:</label>
    <PhoneInput
        containerClass="w-full inset-shadow-sm border border-zinc-200 rounded"
        inputClass="!w-full !h-10 !rounded !text-black"
        country={"za"}
        value={phone}
        onChange={(phone) => setPhone(phone)}
    />
</div>



                        <div className='flex flex-col gap-2 mt-2'>
                        <label htmlFor="email" className='dark:text-white'>Message:</label>
                        <textarea type="text" placeholder='Type your message' className='p-2 inset-shadow-sm border border-zinc-200 bg-white text-black h-50 rounded'></textarea>
                        </div>

                        <button className='text-white bg-black h-10 rounded mt-5 cursor-pointer shadow-md active:shadow-none hover:text-blue-500 dark:hover:border-green-400  dark:hover:text-green-500 dark:text-green'>Send Message</button>

                </form>
            </section>
            <section id='technologies' className='bg-blue-600 dark:bg-green-500 rounded-lg col-1 row-1 md:col-2 '>b</section>
        </footer>
    </>
    
    );
}

export default Portfolio
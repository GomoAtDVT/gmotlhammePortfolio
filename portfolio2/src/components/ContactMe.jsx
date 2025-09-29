

function ContactMe() {
    return (
        <>
        <section
            id="contact"
            className='bg-zinc-500 flex flex-col items-center dark:bg-zinc-900 rounded-lg p-8 row-2 md:row-1 min-h-150 h-full w-full'
          >
            
            <p className="animate-fadeIn4 dark:text-white opacity-70 text-8xl font-semibold">CONTACT ME</p>
<section className="flex justify-center gap-4 pt-14">

<div className="flex flex-col gap-8">

            <a href="mailto:motlhammegomolemo@gmail.com" className=" cursor-pointer animate-fadeIn3 flex rounded-3xl justify-center text-center items-center w-80 h-32  text-sm mb-5 font-semibold dark:text-white  bg-zinc-400 dark:bg-zinc-800 opacity-90 shadow-lg">
                <i className="bi bi-envelope text-xl"></i>
                <p className="pl-4">motlhammegomolemo@gmail.com</p>
            </a>
            <a target="_blank" href="http://linkedin.com/in/mrgmotlhamme" className="cursor-pointer animate-fadeIn3 flex rounded-3xl justify-center text-center items-center px-7 py-1 w-80 h-32 gap-5 text-sm mb-5 font-semibold dark:text-white  bg-zinc-400 dark:bg-zinc-800 opacity-90 shadow-lg">
                <a  className="flex gap-5 items-center">
                <i className="bi bi-linkedin text-xl"></i>
               <p>Linkedin</p>
                </a>
            </a>
</div>
            <div className="flex flex-col gap-8">

            <a target="_blank" href="https://github.com/GomoAtDVT" className="animate-fadeIn3 flex  rounded-3xl justify-center text-center items-center px-7 py-1 w-80 h-32 gap-5 text-sm mb-5 font-semibold dark:text-white bg-zinc-400 dark:bg-zinc-800 opacity-90 shadow-lg">
                <i className="bi bi-github text-xl"></i>
                <p>Github</p>
            </a>
            <a  href="/CVGomolemo.pdf" download="GMotlhamme_CV.pdf" className="animate-fadeIn3 flex  rounded-3xl justify-center text-center items-center px-7 py-1 w-80 h-32 gap-5 text-sm mb-5 font-semibold dark:text-white bg-zinc-400 dark:bg-zinc-800 opacity-90 shadow-lg">
                <i className="bi bi-download text-xl"></i>
                <p>Download CV</p>
            </a>
            </div>
</section>


          </section>
        </>
    )
}

export default ContactMe;
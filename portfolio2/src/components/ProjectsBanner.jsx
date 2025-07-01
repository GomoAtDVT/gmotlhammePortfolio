import react from 'react';

function ProjectsBanner() {

    return (
        <>
        <section
            id="projects-banner"
            className='bg-[url("/soft-performance.jpg")] dark:bg-[url("/black-spheres.jpg")] bg-cover bg-center  rounded-lg h-fit col-span-full flex justify-between p-5'
          >
            <p className="animate-fadeIn4 dark:text-white flex justify-end lg:text-xl font-normal place-items-center h-fit lg:mt-18 sm:mt-10 sm:text-sm">
              BELOW ARE A FEW OF MY PROJECTS <br></br> TO PROVE MY CAPABILITIES
            </p>
            <p className="animate-fadeIn3 dark:text-white flex justify-center text-8xl  font-semibold place-items-center pb-9 h-fit">
              PROJECTS
            </p>
          </section>
        </>
    )
}

export default ProjectsBanner;
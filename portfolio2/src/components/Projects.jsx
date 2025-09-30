import react from 'react';

function Projects() {

    return (
        <>
        <section
            id="projects"
            className="rounded-lg my-2 lg:my-0 h-fit flex overflow-x-scroll lg:overflow-x-hidden lg:col-span-full lg:grid lg:grid-cols-3 gap-2 "
          >
            <div
              id="first-project"
              className='bg-[url("/soft-performance.jpg")] backdrop-blur-2xl dark:text-white dark:bg-[url("/blend.jpg")] bg-cover bg-bottom font-semibold flex flex-col lg:flex-row justify-around items-center rounded-lg lg:h-120  lg:col-span-2 p-5 py-16 gap-5'
            >
              <span className="lg:text-6xl text-5xl italic font-bold">
                SUBREDDIT<br></br> CHANNEL <br></br> VIEWER
              </span>
              <div className="gap-8 flex flex-col ">
                <p className="text-2xl font-light">
                  A web application that allows users <br></br> to view and
                  interact with Reddit channels,<br></br> showcasing my skills
                  in API integration<br></br> and user interface design.
                </p>
                <button className="border-2 dark:border-amber-200 dark:hover:text-amber-300 cursor-pointer rounded ">
                  <a
                    href="https://github.com/GomoAtDVT/Subreddit"
                    target="_blank"
                    className=""
                  >
                    VIEW
                  </a>
                </button>
              </div>
            </div>

            <div
              id="second-project"
              className='bg-[url("/soft-performance.jpg")] dark:text-white dark:bg-[url("/blend.jpg")] bg-cover bg-left flex flex-col  lg:h-full justify-center gap-15 lg:col-span-1  items-center text-center rounded-lg p-5 py-16 '
            >
              <span className="text-5xl italic font-bold">SORTED</span>
              <div className="gap-15 flex flex-col ">
                <p className="text-xl  font-light text-start">
                  A web application that allows users to visually organize tasks
                  they have to complete, improving time management and
                  productivity. Showcasing my skills in DOM manipulation in
                  JavaScript and user interface design.
                </p>
                <button className="border-2 dark:border-amber-200 dark:hover:text-amber-300 cursor-pointer rounded ">
                  <a
                    href="https://gomoatdvt.github.io/To-Do-list/"
                    target="_blank"
                    className=""
                  >
                    VIEW
                  </a>
                </button>
              </div>
            </div>

            <div
              id="third-project"
              className='bg-[url("/soft-performance.jpg")] dark:text-white dark:bg-[url("/blend.jpg")] bg-cover bg-left flex flex-col items-center lg:text-center p-3 justify-center gap-15 rounded-lg lg:h-120 h-fit py-16 lg:col-span-1 col-span-2'
            >
              <span className="text-5xl italic font-bold">AGE CALCULATOR</span>
              <div className="gap-15 flex flex-col px-11">
                <p className="text-xl font-light text-start">
                  A web application that allows users to receive an accurate
                  calculation of their, or any other person/ things age.
                  Showcasing my skills in Node package management, DOM
                  manipulation in JavaScript and user interface design.
                </p>
                <button className="border-2 dark:border-amber-200 dark:hover:text-amber-300 cursor-pointer rounded ">
                  <a
                    href="https://gomoatdvt.github.io/Age-calculator/"
                    target="_blank"
                    className=""
                  >
                    VIEW
                  </a>
                </button>
              </div>
            </div>

            <div
              id="fourth-project"
              className='bg-[url("/soft-performance.jpg")] dark:text-white dark:bg-[url("/blend.jpg")] bg-cover bg-bottom  flex flex-col lg:flex-row justify-center lg:justify-around items-center rounded-lg lg:py-6 py-16 col-span-2 gap-5 px-5'
            >
              <span className="text-6xl italic font-bold"> ECHOSPACE </span>
              <div className="gap-8 flex flex-col ">
                <p className="text-2xl font-light">
                  A web application that allows users <br></br> to view, create,
                  post, and delete blogs.<br></br> showcasing my skills in DOM
                  Manipulation<br></br> and user interface design.
                </p>
                <button className="border-2 dark:border-amber-200 dark:hover:text-amber-300 cursor-pointer px-2 rounded ">
                  <a href="https://echo-space-one.vercel.app/" target="_blank" className="">
                    VIEW
                  </a>
                </button>
              </div>
            </div>
          </section>
        </>
    )
}

export default Projects;
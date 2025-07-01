import React, { use, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import MoreInfoModal from "./components/moreInfoModal";
import TechnologiesCarousel from "./components/technologiesCarousel";
import ServiceBanner from "./components/ServiceBanner";
import AboutMe from "./components/AboutMe";
import { service } from "./services.json";
import ProjectsBanner from "./components/ProjectsBanner";
import Projects from "./components/Projects";
import emailjs from "@emailjs/browser";
function Portfolio() {
  const [phone, setPhone] = useState("");
  const [contactForm, setContactForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const sidebarBtn = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden");
    sidebar.classList.toggle("block");
  };

  const changeAppearence = () => {
    const toggleContainer = document.getElementById("toggle-container");
    toggleContainer.classList.toggle("invisible");
    toggleContainer.classList.toggle("visible");
  };
  const [colorscheme, setColorScheme] = useState("dark:");
  const lightMode = () => {
    setColorScheme("")
  };
  const darkMode = () => {
    setColorScheme("dark:")
  };

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [selectedService, setSelectedService] = useState({}); // State for selected service
  const openModel = (event) => {
    const serviceId = event.currentTarget.id; // Get the id of the clicked service
    const services = service.find((s) => s.id === Number.parseInt(serviceId)); // Find the service data based on the id
    setIsModalOpen(true);
    console.log(services);
    setSelectedService(services); // Set the selected service data
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function sendEmail(event) {
    const name = event.get("full-name");
    const company = event.get("company");
    const email = event.get("email");
    const phone = event.get("phone");
    const message = event.get("message");

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        { name, company, email, phone, message },
        {
          publicKey: import.meta.env.VITE_EMAIL_SERVICE_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setContactForm({
            name: "",
            company: "",
            email: "",
            message: "",
          });
          setPhone("");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  }

  return (
    <>
      <MoreInfoModal
        colorscheme={colorscheme}
        isOpen={isModalOpen}
        onClose={closeModal}
        service={selectedService}
      />
      <header className={`bg-[url("/soft-performance.jpg")] dark:bg-[url("/black-spheres.jpg")] lg:bg-center bg-cover  dark:bg-right p-5 m-2 rounded-lg h-170 sm:bg-left`}>
        <section className="flex items-center justify-between p-5">
          <div id="logo-light" className={`hidden w-35 dark:block lg:w-45 -mr-35 `}>
            <img src="./dark-logo.png" alt="logo" />
          </div>

          <div id="logo-dark" className="dark:hidden block w-35 lg:w-45 -mr-35">
            <img src="./dark-nobg-logo.png" alt="logo" />
          </div>

          <nav className="dark:text-white hidden lg:flex">
            <ul className="flex gap-30 text-md font-semibold ">
              <li className="hover:text-amber-300 dark:hover:text-amber-600">
                <a href="#services">SERVICES</a>
              </li>
              <li className="hover:text-amber-300 dark:hover:text-amber-600">
                <a href="#about">ABOUT</a>
              </li>
              <li className="hover:text-amber-300 dark:hover:text-amber-600">
                <a href="#projects-banner">PROJECTS</a>
              </li>
              <li className="hover:text-amber-300 dark:hover:text-amber-600">
                <a href="#technologies">TECHNOLOGIES</a>
              </li>
            </ul>
          </nav>

          <button
            onClick={sidebarBtn}
            className="dark:text-white text-3xl mb-1 cursor-pointer"
          >
            &#9776;
          </button>
        </section>

        <section id="sidebar" className=" hidden">
          <nav className="bg-zinc-200  dark:bg-zinc-800 p-4 w-80 dark:text-white flex flex-col justify-end absolute top-10 right-10 z-2 ">
            <button
              onClick={sidebarBtn}
              className="flex justify-end m-4 cursor-pointer dark:font-light hover:text-amber-300 dark:hover:text-amber-600"
            >
              CLOSE
            </button>
            <hr />
            <ul className="flex flex-col gap-10 m-4 my-5 text-md dark:font-light">
              <li className="hover:text-amber-300 dark:hover:text-amber-600">
                <a onClick={sidebarBtn} href="#services">
                  SERVICES
                </a>
              </li>
              <li className="hover:text-amber-300 dark:hover:text-amber-600">
                <a onClick={sidebarBtn} href="#about">
                  ABOUT
                </a>
              </li>
              <li className="hover:text-amber-300 dark:hover:text-amber-600">
                <a onClick={sidebarBtn} href="#projects-banner">
                  PROJECTS
                </a>
              </li>
              <li className="hover:text-amber-300 dark:hover:text-amber-600">
                <a onClick={sidebarBtn} href="#technologies">
                  TECHNOLOGIES
                </a>
              </li>
              <hr />

              <div className="dark:font-light ">
                {/* <button
                  onClick={changeAppearence}
                  className="dark:font-light hover:text-amber-300 dark:hover:text-amber-600 cursor-pointer"
                >
                  APPEARENCE
                </button> */}

                <div id="toggle-container" className="invisible mt-2">
                  <p
                    onClick={lightMode}
                    className="p-2 ml-7 hover:text-amber-300 dark:hover:text-amber-600 cursor-pointer"
                  >
                    LIGHT
                  </p>
                  <p
                    onClick={darkMode}
                    className="p-2 ml-7 hover:text-amber-300 dark:hover:text-amber-600 cursor-pointer"
                  >
                    DARK
                  </p>
                </div>
              </div>
            </ul>
          </nav>
        </section>
        <section className="w-full h-full font-semibold dark:text-white">
          <p className="animate-fadeIn mt-59">
            PRODUCING <br></br>QUALITY VISUAL <br></br>REPRESENTATION
          </p>

          <p className="animate-fadeIn2 absolute lg:left-121 sm:left-10 lg:bottom-28 sm:bottom-100 md:bottom-30 md:left-25">
            BY MAINTAINING TRUST <br></br>BETWEEN CLIENTS
          </p>

          <p className="animate-fadeIn3 absolute lg:text-8xl sm:text-6xl right-4 lg:bottom-20 md:bottom-20 sm:right-10 sm:top-100">
            REFLECTING <br></br>CONTINUOUS<br></br> GROWTH
          </p>
        </section>
      </header>

      <main className=" dark:bg-transparent m-2 grid lg:grid-cols-2 gap-2 sm:grid-cols-1 md:grid-cols-1">
        {/* services section  */}
        <ServiceBanner />

        <section className=" bg-transparent overflow-y-scroll styleScroll flex flex-col gap-2.5 h-110">
          <div className='bg-[url("/soft-performance.jpg")] text-4xl   dark:text-white   dark:bg-[url("/blend.jpg")] bg-cover bg-bottom dark:bg-bottom mr-1.5 h-35 p-4 rounded-lg'>
            <p className="animate-fadeIn3">WEB DEVELOPMENT</p>{" "}
            <p
              className="text-lg flex justify-end mt-11 mr-4 gap-2 dark:text-white cursor-pointer"
              onClick={openModel}
              id="1"
            >
              LEARN MORE <i className="bi bi-arrow-up-right-square "></i>
            </p>
          </div>
          <div className='  text-4xl bg-[url("/soft-performance.jpg")]  dark:text-white dark:bg-[url("/blend.jpg")] bg-cover bg-bottom dark:bg-bottom mr-1.5 h-35 p-4 rounded-lg'>
            <p className="animate-fadeIn3">FULL STACK DEVELOPMENT</p>{" "}
            <p
              className="text-lg flex justify-end mt-11 mr-4 gap-2 dark:text-white cursor-pointer"
              onClick={openModel}
              id="2"
            >
              LEARN MORE <i className="bi bi-arrow-up-right-square "></i>
            </p>
          </div>

          <div className='text-4xl  bg-[url("/soft-performance.jpg")] dark:text-white dark:bg-[url("/blend.jpg")] bg-cover bg-bottom dark:bg-bottom mr-1.5 h-35 p-4 rounded-lg'>
            <p className="animate-fadeIn3">MOBILE DEVELOPMENT</p>
            <p
              className="text-lg flex justify-end mt-11 mr-4 gap-2 dark:text-white cursor-pointer"
              onClick={openModel}
              id="3"
            >
              LEARN MORE <i className="bi bi-arrow-up-right-square "></i>
            </p>
          </div>
          <div className=' text-4xl bg-[url("/soft-performance.jpg")] duration-300 ease-in-out  dark:text-white dark:bg-[url("/blend.jpg")] bg-cover bg-bottom  dark:bg-bottom mr-1.5 h-35 p-4 rounded-lg'>
            GRAPHIC DESIGN{" "}
            <p
              className="text-lg flex justify-end mt-11 mr-4 gap-2 dark:text-white cursor-pointer"
              onClick={openModel}
              id="4"
            >
              LEARN MORE <i className="bi bi-arrow-up-right-square "></i>
            </p>
          </div>
        </section>
        <AboutMe />

        <ProjectsBanner />

        <Projects />
      </main>
      <TechnologiesCarousel />
      <footer className=" h-max m-2 grid grid-cols-1 md:grid-cols-2 gap-4 bg-transparent">
        <section className="bg-zinc-400 dark:bg-zinc-900 rounded-lg p-8 col-1 row-2 md:row-1">
          <h1 className="dark:text-white text-4xl mb-7">
            Ready to collaborate on converting your dream into reality
          </h1>
          <form action={sendEmail} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="full-name" className="dark:text-white">
                  Full Name:
                </label>
                <input
                  placeholder="Greg Jackson"
                  type="text"
                  name="full-name"
                  value={contactForm.name}
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      name: e.target.value,
                    })
                  }
                  required
                  className="p-2 text-lg bg-white h-10 rounded inset-shadow-sm border border-zinc-200"
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="company" className="dark:text-white ">
                  Company:
                </label>
                <input
                  placeholder="Chase"
                  type="text"
                  name="company"
                  value={contactForm.company}
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      company: e.target.value,
                    })
                  }
                  required
                  className="p-2 text-lg bg-white h-10 rounded inset-shadow-sm border border-zinc-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="dark:text-white">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={contactForm.email}
                onChange={(e) =>
                  setContactForm({
                    ...contactForm,
                    email: e.target.value,
                  })
                }
                required
                placeholder="jackson@gmail.com"
                className="p-2 bg-white text-black h-10 rounded w-full inset-shadow-sm border border-zinc-200"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="number" className="dark:text-white">
                Phone Number:
              </label>
              <PhoneInput
                containerClass="w-full inset-shadow-sm border border-zinc-200 rounded"
                inputClass="!w-full !h-10 !rounded !text-black"
                name="phone"
                placeholder="082 123 4567"
                country={"za"}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="message" className="dark:text-white">
                Message:
              </label>
              <textarea
                type="text"
                name="message"
                required
                value={contactForm.message}
                onChange={(e) =>
                  setContactForm({
                    ...contactForm,
                    message: e.target.value,
                  })
                }
                placeholder="Type your message"
                className="p-2 inset-shadow-sm border border-zinc-200 bg-white text-black h-50 rounded"
              ></textarea>
            </div>

            <button className="text-white bg-black h-10 rounded mt-5 cursor-pointer shadow-md active:shadow-none hover:text-amber-300 dark:hover:border-amber-400  dark:hover:text-amber-500 dark:text-green">
              Send Message
            </button>
          </form>
        </section>
        <section className='bg-[url("/white-cube.jpg")] dark:bg-[url("/peach-cube.jpg")] bg-cover rounded-lg col-1 row-1 md:col-2 '></section>
      </footer>
    </>
  );
}

export default Portfolio;

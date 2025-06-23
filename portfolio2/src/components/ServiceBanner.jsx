import react from 'react';

function ServiceBanner() {

    return (
        <>
        <section
            id="services"
            className=' flex rounded-lg justify-end p-5 font-semibold bg-[url("./soft-performance.jpg")] dark:bg-[url("./blend.jpg")] bg-cover bg-top dark:text-white h-110 text-5xl '
          >
            <p className="animate-fadeIn4">EXPLORE MY <br></br> SERVICES</p>
          </section>
        </>
    )
}
export default ServiceBanner;
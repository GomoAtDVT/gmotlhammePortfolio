import React from 'react';

const MoreInfoModal = ({ isOpen, onClose ,service}) => {
    if (!isOpen) return null;

    return (
        <>
        <div id="modal-overlay" className='h-full w-full z-3 top-0 fixed backdrop-blur-xs' onClick={onClose}>
            <div id="modal-content" className="animate-popOut h-150 w-150 z-10 fixed top-20 lg:left-110 sm:left-24 bg-[url('/white-waves.jpg')] dark:bg-[url('/dark-modal2.jpg')] bg-cover bg-left rounded-xl " onClick={(e) => e.stopPropagation()}>
                <button id="modal-close" className='dark:text-white text-2xl p-5 cursor-pointer absolute right-0' onClick={onClose}>
                    &times;
                </button>
                <p className="dark:text-white text-7xl font-semibold italic p-9 pt-28  ">{service.name}</p>
                <p className="dark:text-white text-2xl p-9  mt-4">{service.description}</p>
               
            </div>

            
        </div>
        </>
    );
};

export default MoreInfoModal;
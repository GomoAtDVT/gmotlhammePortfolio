import React from 'react';
// import { services } from '../data/data';

const MoreInfoModal = ({ isOpen, onClose ,service}) => {
    if (!isOpen) return null;

    return (
        <>
        <div id="modal-overlay" className='h-full w-full z-3 top-0 fixed backdrop-blur-xs' onClick={onClose}>
            <div id="modal-content" className="h-150 w-150 z-10 fixed top-20 left-110 bg-amber-500 dark:bg-[url('./dark-modal1.jpg')] bg-cover bg-left rounded-xl " onClick={(e) => e.stopPropagation()}>
                <button id="modal-close" className='dark:text-white text-2xl p-5 cursor-pointer' onClick={onClose}>
                    &times;
                </button>
                <p className="dark:text-white text-7xl font-semibold italic p-9  ">{service.name}</p>
                <p className="dark:text-white text-2xl p-9  mt-4">{service.description}</p>
                <p className="dark:text-white text-xl p-5 pr-96 "></p>
               
            </div>

            
        </div>
        </>
    );
};

export default MoreInfoModal;
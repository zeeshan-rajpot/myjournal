// ForgetModal.jsx
import React, { useState } from 'react';





const ForgetModal = ({ toggle }) => {

    return (



        <>
            <div
                id="default-modal"
                aria-hidden="true"
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            >
                <div className="relative w-full max-w-md bg-white rounded-lg shadow-md">
                    <div className="flex justify-between items-center p-4 ">
                        <h3></h3>
                        <button
                            onClick={toggle}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <span className="sr-only">Close modal</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M10 9.293l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414L10 9.293z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="p-6 pt-1 space-y-4 text-center">
                        <h3 className='text-xl md:text-2xl font-semibold'>Reset Your Password</h3>
                        <p className="text-sm text-gray-500">
                            Enter your email address and we will send you a link to reset your password.
                        </p>
                        <div className="input-container shadow  mt-3 rounded-3xl  bg-[#fafafa]">

                            <img src="/Frame 33.png" className="w-6" />
                            <input type="email" name='email' placeholder="Email" className="bg-[#fafafa] " />
                        </div>
                        <button
                            type="submit"
                            className="w-[75%] m-auto my-5 mt-10 text-white bg-login font-medium rounded-3xl text-sm px-5 py-2.5 text-center  hover:bg-transparent hover:text-login duration-200 border border-login"
                        >
                            Next
                        </button>
                    </div>


                    




                    another data here 
                </div>
                

            </div>











        </>
    );
};

export default ForgetModal;

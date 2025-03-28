import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios'
import toast from 'react-hot-toast';
export default function Modal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    requirements: '',
  });



  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const submitHandler=async(e)=>{
    e.preventDefault();
    try {
        const response=await axios.post("https://a2developer.onrender.com/api/user",formData)
        console.log(response.data.success)
        toast.success(response.data.message)
        setFormData({  
            name: '',
            email: '',
            phone: '',
            institution: '',
            requirements: '',
          });
  
          onClose();
    } catch (error) {
        toast.error(error?.response?.data?.message||error?.message)
        console.log(error?.response?.data?.message||error?.message)
    }
  }
  return (
    <>
      {isOpen && (
        <div className="fixed  z-50 ">
          <div className="relative  ">
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>
            
            <motion.div 
              className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-xl overflow-y-auto h-full"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-2xl font-bold text-gray-800">Get In Touch</h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <p className="mb-6 text-gray-600">Have questions about our Products? Fill out the form below to get a call with us.</p>
                
                <form onSubmit={submitHandler}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="name"
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Name"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      id="email"
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Email"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Contact Number <span className="text-red-500">*</span></label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                        +91
                      </span>
                      <input
                        type="tel"
                        id="phone"
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Contact Number"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1">Institution Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="institution"
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Institution Name"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">Requirements</label>
                    <textarea
                      id="requirements"
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Requirements"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
}

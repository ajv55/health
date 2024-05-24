import React from 'react'

export default function Share() {
  return (
    <div className=" lg:max-w-4xl w-[95%] mx-auto mt-10 p-6 bg-white rounded-lg shadow-md shadow-zinc-900">
        <h2 className="lg:text-6xl text-4xl font-bold text-gray-800 mb-4">Sharing Your Information</h2>
        <p className="text-gray-700 text-xl mb-4">We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except in the following circumstances:</p>
        
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Service Providers</h3>
            <p className="text-gray-700 text-md">We may share your information with third-party service providers who assist us in operating our website and delivering our services, provided they agree to keep your information confidential.</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Legal Requirements</h3>
            <p className="text-gray-700 text-xl">We may disclose your information if required by law, or to protect our rights, property, or safety, or that of others.</p>
        </div>
    </div>
  )
}

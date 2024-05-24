import React from 'react'

export default function ExtraInfo() {
  return (
    
        <div className="lg:max-w-4xl w-[95%] mx-auto p-6 bg-white rounded-lg shadow-md shadow-zinc-900 mt-10">
            <h1 className="lg:text-6xl text-4xl font-semibold mb-4">Privacy Policy</h1>
            
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Data Security</h2>
                <p className="text-gray-700 text-xl mb-4">
                    We implement a variety of security measures to ensure the safety of your personal information. These measures include secure servers, encryption, and access controls. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
                </p>
            </div>
            
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 text-lg mb-4">
                    We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us understand your preferences and usage patterns. You can choose to disable cookies through your browser settings, but this may affect your ability to use certain features of our website.
                </p>
            </div>
        </div>

  )
}

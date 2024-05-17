import React from 'react'

export default function MoreInfo() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md shadow-zinc-900 mt-10">
        <h2 className="text-5xl font-semibold mb-4">Your Rights</h2>
        <ul className="list-disc list-inside mb-6">
            <li className="mb-2 text-xl">
                <span className="font-semibold">Access:</span> You can request a copy of the personal information we hold about you.
            </li>
            <li className="mb-2 text-xl">
                <span className="font-semibold">Correction:</span> You can request correction of any inaccurate or incomplete information.
            </li>
            <li className="mb-2 text-xl">
                <span className="font-semibold">Deletion:</span> You can request deletion of your personal information, subject to certain exceptions.
            </li>
            <li className="mb-2 text-xl">
                <span className="font-semibold">Opt-out:</span> You can opt-out of receiving promotional communications from us at any time.
            </li>
        </ul>
        
        <h2 className="text-4xl font-semibold mb-4">Changes to This Privacy Policy</h2>
        <p className="mb-6 text-xl">
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the new Privacy Policy on our website. Your continued use of our website after any changes indicates your acceptance of the updated Privacy Policy.
        </p>
    </div>
  )
}

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import style from '../../style.module.css';
import toast from 'react-hot-toast';

const ResetPasswordPage = ({ params: { token } }: { params: { token: string } }) => {
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/resetPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, newPassword }),
      });

      console.log(response)

      if (!response.ok) {
        throw new Error('Failed to reset password');
      }

      toast.success('Password reset successful! You can now log in with your new password.');
      setTimeout(() => router.push('/login'), 2000); // Redirect after 2 seconds
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className={`${style.background} w-full flex flex-col justify-start items-center h-screen mx-auto p-4`}>
      <h1 className="lg:text-6xl text-4xl text-indigo-600 font-bold mb-4">Reset Your Password</h1>
      <form className='lg:w-[35%] w-full' onSubmit={handlePasswordReset}>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-2xl font-medium text-gray-700">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-1 block p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Reset Password
        </button>
      </form>
      <div className='w-full flex justify-center items-end  h-full'>
        <p className='text-xl text-center text-gray-700 lg:text-right'>Copyright © 2024 MyFitGenius. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ResetPasswordPage;

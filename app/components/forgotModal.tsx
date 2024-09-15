'use client';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface ForgotPasswordModalProps {
  onClose: () => void;
}

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

     await axios.post('/api/forgotPassword', {email}).then((res) => {
        console.log(res)
        setMessage(res.data || 'Something went wrong.');
        toast.success(res.data);
        onClose();
    })
    
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border border-gray-300 p-2 rounded-lg"
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-800 text-white p-2 rounded-lg w-full"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>
        <button onClick={onClose} className="text-indigo-600 mt-4">Close</button>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;

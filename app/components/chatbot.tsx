'use client';

import { useState, useEffect } from 'react';
import { FiActivity } from 'react-icons/fi';
import { IoMdCloseCircleOutline } from "react-icons/io";

interface ChatbotProps {
  visible: boolean;
  closeChat: () => void;
}

interface Message {
  type: 'user' | 'bot';
  text: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ visible, closeChat }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (visible) {
      const initialMessage: Message = { type: 'bot', text: 'How can I help you today?' };
      setMessages([initialMessage]);
    }
  }, [visible]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const userMessage: Message = { type: 'user', text: message };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const res = await fetch('/api/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    const botMessage: Message = { type: 'bot', text: data.reply };
    setMessages((prevMessages) => [...prevMessages, botMessage]);

    setMessage('');
    setLoading(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-16 lg:right-4 right-12 bg-white rounded-lg shadow-lg lg:w-[25%] ring-2 ring-indigo-400 max-h-96 overflow-y-auto">
      <div className='w-full h-12 p-2 bg-gradient-to-br from-indigo-800 to-indigo-400 flex justify-between items-center'>
        <div className='flex justify-center items-center gap-2'>
          <h1 className='text-2xl text-indigo-50'>MyFitGenius</h1>
          <FiActivity  size={20} color='gold' />
        </div>
        <IoMdCloseCircleOutline onClick={closeChat} size={25} className='text-indigo-50' />
      </div>
      <div className="flex flex-col p-2 space-y-2 mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 my-2 rounded ${
              msg.type === 'user' ? 'bg-indigo-100 self-end text-right' : 'bg-indigo-50 self-start'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me anything about health or exercise..."
          className="flex-grow p-2 border border-indigo-300 rounded-l"
        />
        <button type="submit" className="bg-indigo-600 text-white p-2 rounded-r" disabled={loading}>
          {loading ? 'Loading...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default Chatbot;




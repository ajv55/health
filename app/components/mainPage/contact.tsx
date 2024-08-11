'use client';

import { FiMail, FiUser, FiMessageCircle } from 'react-icons/fi';
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import style from '@/app/style.module.css';
import toast from 'react-hot-toast';
import { sendEmail } from '@/app/action/sendEmail';



export default function Contact() {
  const ref = useRef<HTMLFormElement  | null>(null);
  const animationRef = useRef(null);
  const isInView = useInView(animationRef);
  const mainControls = useAnimation();


  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);
  

  return (
    <div ref={animationRef} className={`${style.background} w-full h-full bg-slate-100 py-16 flex flex-col lg:flex-row justify-center items-center relative space-y-12 lg:space-y-0 lg:space-x-12`}>
      <div className="lg:w-1/2 lg:h-[39rem] flex  flex-col items-center justify-evenly">
        <h1 className="text-5xl lg:text-6xl font-bold text-center mb-8 lg:mb-12 text-indigo-600">
          Contact Us <br /> We&#39;re Here <span className="font-extrabold">to Help</span>
        </h1>
        <p className="text-lg lg:text-2xl text-center font-light text-gray-800 mb-8 lg:mb-12 max-w-xl">
          Our team is standing by to assist you with any inquiries you may have. Whether you need help navigating the app, have a question about your account, or just want to chat about your fitness goals, we&#39;re here to help. Reach out to us today and let&#39;s make magic happen together!
        </p>
      </div>
      <motion.form
        variants={{
          hidden: { x: 50, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ type: 'spring', stiffness: 70, duration: 1, delay: 0.55 }}
        onSubmit={async (event) =>  {
          event.preventDefault(); // Prevent default form submission
      
          if (ref.current) {  // Type guard to ensure ref.current is not null
            const formData = new FormData(ref.current); // Collect form data
            const res = await sendEmail(formData); // Send the email using the action
            console.log(res);
            if(res.success === true){
              toast.success('Successfully sent message! 💪🏻');
            }
            ref.current.reset(); // Reset the form fields
          }
        }}
        ref={ref}
        className="lg:w-[45%] w-[95%] ring-1 ring-indigo-400 bg-white rounded-xl shadow-xl flex flex-col justify-center items-center p-8 lg:p-12"
      >
        <h1 className="text-4xl lg:text-5xl w-full text-center font-bold text-indigo-600 mb-8 lg:mb-12">Send A Message!</h1>
        <div className="flex flex-col gap-6 w-full max-w-lg">
          <div className="flex items-center gap-2">
            <FiUser className="text-indigo-600 text-xl" />
            <input className="block flex-1 p-3 text-lg text-gray-800 rounded-lg ring-1 focus:ring-2 ring-indigo-400" placeholder="Firstname ..." type="text" name="firstname" id="firstname" />
          </div>
          <div className="flex items-center gap-2">
            <FiUser className="text-indigo-600 text-xl" />
            <input className="block flex-1 p-3 text-lg text-gray-800 rounded-lg ring-1  focus:ring-2 ring-indigo-400" placeholder="Lastname ..." type="text" name="lastname" id="lastname" />
          </div>
          <div className="flex items-center gap-2">
            <FiMail className="text-indigo-600 text-xl" />
            <input className="block flex-1 p-3 text-lg text-gray-800 rounded-lg ring-1 focus:ring-2 ring-indigo-400" placeholder="Email ..." type="email" name="email" id="email" />
          </div>
          <div className="flex items-start gap-2">
            <FiMessageCircle className="text-indigo-600 text-xl" />
            <textarea id="message" rows={4} name="message" className="block flex-1 w-full p-3 text-lg text-gray-800 rounded-lg ring-1 focus:ring-2 ring-indigo-400 resize-none" placeholder="Leave a message..."></textarea>
          </div>
          <button className="w-full py-3 text-center text-white rounded-xl font-bold text-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-l focus:ring-2 ring-inset focus:ring-indigo-200 drop-shadow-xl" type="submit">
            Send Message!
          </button>
        </div>
      </motion.form>
    </div>
  );
}

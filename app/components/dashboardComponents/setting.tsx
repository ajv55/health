'use client';
import { motion } from "framer-motion"
import {signOut,useSession} from 'next-auth/react';
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import axios from "axios";
import Email from "next-auth/providers/email";
import toast from "react-hot-toast";
import CancelModal from "./cancelModal";

type SettingProps = {
    closeOnClick?: () => void;
    arrowOnClick?: () => void
}

export default function Setting({closeOnClick, arrowOnClick}: SettingProps) {

    const {data: session, update} = useSession();
    const router = useRouter();

    const [formData, setFormData] = useState({
      name: session?.user?.name || "",
      email: session?.user?.email || "",
      age: session?.user?.age || "",
      weight: session?.user?.weight || "",
    });
    const [passwordData, setPasswordData] = useState({
      currentPassword: "",
      newPassword: "",
    });
    const [message, setMessage] = useState("");
    const [subId, setSubId] = useState('');
    const [cancelModal, setCancelModel] = useState(false);
  
    const handleInputChange = (e: any) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handlePasswordChange = (e: any) => {
      const { name, value } = e.target;
      setPasswordData({ ...passwordData, [name]: value });
    };
  
    const handleSubmit = async (e: any) => {
      e.preventDefault();
      try {
        update({name: formData.name, age: formData.age, email: formData.email, weight: formData.weight });
        toast.success('Successfully updated your user settings');
      } catch (error) {
        console.error('error occur when updating user settings', error)
      }
    };
    const getSub = async () => {

      await axios.get('/api/updateSub').then((res) => {
        console.log(res)
        if(res.statusText === 'OK') {
          setSubId(res?.data?.subId)
        }
      })
    }

    useEffect(() => {
      try {
        getSub()
      } catch (error) {
        console.log(error)
      }

    
    }, [])

    const handleCancellation = async () => {
      try {
        await axios.post('/api/cancel', {subId}).then(() => toast.success('Succesfully cancelled your subscription'))
        
      } catch (error) {
        toast.error(`Error occurred ${error}`)
      }
    };

    const handleCancelModal = () => {
      if(subId === '') {
        toast.error('No current subscription');
        setTimeout(() => {
          router.push('/pricing')
        }, 3000)
      } else {
        setCancelModel(true)
      }
    }

  
    const handlePasswordSubmit = async (e: any) => {
      e.preventDefault();
      try {
         const res = await axios.post("/api/updatePassword", passwordData).then((res) => {
          console.log(res?.data?.status)
          if(res?.data?.status === 200){
            toast.success('Successfully updated password')
          }
          if(res?.data?.status === 401){
            toast.error('Passwords do not match')
          }
          if(res?.data?.status === 400){
            toast.error('Current and new password required')
          }
         });
      } catch (error) {
        setMessage("Error updating password");
      }
    };

    

    if(!session) {
        router.push('/')
    }

    console.log('subId: ',subId)

  return (
    <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 150, damping: 20 }} exit={{ x: "-100%" }} className='w-full z-20 overflow-scroll absolute top-0 left-0 rounded-2xl h-full bg-slate-200'>
      {cancelModal && <CancelModal handleModal={() => setCancelModel(false)} handleDelete={handleCancellation} />}
      <div className="flex flex-col gap-4 justify-start items-start p-1">
        <MdOutlineArrowBackIosNew className="mt-2" onClick={arrowOnClick} size={30}  />
        <h1 className="text-5xl lg:text-3xl font-bold tracking-wide">Setting</h1>
      </div>

      <div className="w-full flex flex-col justify-start items-start p-2">
        <div className="w-full flex justify-start items-center gap-4">
          <FaUser size={25} className="lg:w-5 lg:h-5" />
          <h3 className="text-2xl lg:text-xl font-bold tracking-wide">Account</h3>
        </div>
        <div className="flex w-full flex-col justify-start items-start p-2">
          <form onSubmit={handleSubmit} className="mb-4 w-full">
          <div className="mb-2">
            <label className="block">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="border p-2 rounded-lg h-9 outline-teal-500 w-[85%]"
            />
          </div>
          <div className="mb-2">
            <label className="block">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border p-2 rounded-lg h-9 outline-teal-500  w-[85%]"
            />
          </div>
          <div className="mb-2">
            <label className="block">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="border p-2 rounded-lg h-9 outline-teal-500 w-[85%]"
            />
          </div>
          <div className="mb-2">
            <label className="block">Weight</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              className="border p-2 rounded-lg h-9 outline-teal-500 w-[85%]"
            />
          </div>
          <button type="submit" className="bg-blue-500 rounded-xl text-white p-2">
            Update Profile
          </button>
        </form>
        <form className="w-full" onSubmit={handlePasswordSubmit}>
          <div className="mb-2">
            <label className="block">Current Password</label>
            <input
              type="password"
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
              className="border p-2 rounded-lg h-9 outline-teal-500 w-[85%]"
            />
          </div>
          <div className="mb-2">
            <label className="block">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              className="border p-2 rounded-lg h-9 outline-teal-500 w-[85%]"
            />
          </div>
          <button type="submit" className="bg-red-500 rounded-xl text-white p-2">
            Change Password
          </button>
        </form>
        </div>
      </div>

      <div className="w-full flex justify-center items-center ">
        <button onClick={handleCancelModal} className="rounded-lg text-center text-xl font-medium tracking-wide text-teal-100 bg-gradient-to-bl from-slate-950 via-slate-700 to-slate-950 w-[85%] py-3">Cancel Subscription</button>
      </div>
        
        <div className="w-full flex justify-center items-center mt-10 ">
          <Link className="rounded-lg text-center text-3xl font-medium tracking-wide text-teal-100 bg-gradient-to-bl from-slate-950 via-slate-700 to-slate-950 w-[85%] py-3" href='/signOut'>Sign Out</Link>
        </div>
    </motion.div>
  )
}

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
import style from '@/app/style.module.css'

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
    const [cancelModal, setCancelModal] = useState(false);
  
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
        setCancelModal(true)
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


    console.log('subId: ',subId)

  return (
    <div className={`${style.background} w-full overflow-scroll p-4 rounded-2xl h-full`}>
      {cancelModal && <CancelModal handleModal={() => setCancelModal(false)} handleDelete={handleCancellation} />}
      <div className="flex flex-col gap-6 justify-start items-start p-2">
        <h1 className="text-4xl lg:text-5xl text-indigo-600 font-bold tracking-wide">Account Settings</h1>
      </div>

      <div className="w-full flex flex-col justify-start items-start p-4 ring-2 ring-indigo-500 bg-white rounded-lg shadow-md">
        <div className="w-full flex justify-start items-center gap-4 mb-6">
          <FaUser size={30} className="text-indigo-600" />
          <h3 className="text-2xl lg:text-3xl font-semibold text-indigo-600 tracking-wide">Account</h3>
        </div>
        <div className="flex w-full flex-col justify-start items-start space-y-4">
          <form onSubmit={handleSubmit} className="mb-6 w-full">
            <div className="mb-4">
              <label className="block text-lg font-medium text-indigo-600">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="border border-indigo-300 p-3 rounded-lg h-12 outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-indigo-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border border-indigo-300 p-3 rounded-lg h-12 outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-indigo-600">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="border border-indigo-300 p-3 rounded-lg h-12 outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-indigo-600">Weight</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                className="border border-indigo-300 p-3 rounded-lg h-12 outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              />
            </div>
            <button type="submit" className="bg-indigo-600 text-white rounded-xl p-3 w-full font-medium hover:bg-indigo-700 transition duration-200">
              Update Profile
            </button>
          </form>
          <form className="w-full" onSubmit={handlePasswordSubmit}>
            <div className="mb-4">
              <label className="block text-lg font-medium text-indigo-600">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                className="border border-indigo-300 p-3 rounded-lg h-12 outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-indigo-600">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                className="border border-indigo-300 p-3 rounded-lg h-12 outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              />
            </div>
            <button type="submit" className="bg-red-600 text-white rounded-xl p-3 w-full font-medium hover:bg-red-700 transition duration-200">
              Change Password
            </button>
          </form>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between lg:gap-0 gap-5 mt-6 items-center">
      <div className="lg:w-[40%] w-full  flex justify-center items-center ">
        <button onClick={handleCancelModal} className="rounded-lg text-xl font-medium tracking-wide text-white bg-gradient-to-bl from-indigo-900 via-indigo-700 to-indigo-900 w-full py-3 hover:bg-gradient-to-bl hover:from-indigo-800 hover:via-indigo-600 hover:to-indigo-800 transition duration-200">
          Cancel Subscription
        </button>
      </div>

      <div className="lg:w-[40%] w-full  flex  justify-center items-center ">
        <Link className="rounded-lg  text-xl font-medium tracking-wide text-white bg-gradient-to-bl from-indigo-900 via-indigo-700 to-indigo-900 w-full py-3 text-center hover:bg-gradient-to-bl hover:from-indigo-800 hover:via-indigo-600 hover:to-indigo-800 transition duration-200" href='/signOut'>
          Sign Out
        </Link>
      </div>
      </div>
    </div>
  )
}

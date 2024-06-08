'use client';
import { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react';
import Link from "next/link";
import { motion } from "framer-motion";
import style from '@/app/style.module.css'

export default function Register() {
    const { data: session, status } = useSession();
    const ref = useRef<HTMLFormElement>(null);
    const router = useRouter();

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        weightInLbs: '',
        age: '',
        heightInInches: '',
        gender: '',
        agree: '',
        TDEE: '',
        goal: '',
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        ref.current?.reset();
        axios.post('/api/register', data)
            .then(() => {
                toast.success('User has been registered successfully!');
                router.push('/login');
            })
            .catch((error) => console.error('Error occurred when trying to register', error));
    };

    console.log(data)

    return (
        <div className={`${style.background} min-h-screen flex items-center justify-center bg-slate-100`}>
            <motion.div 
                className="bg-white shadow-md rounded-lg p-8 max-w-3xl w-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-5xl font-bold text-center text-indigo-600 mb-8">Sign Up</h1>
                <form ref={ref} onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-lg font-medium text-gray-700">Username</label>
                            <input 
                                type="text" 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                placeholder="Enter name"
                                value={data.name}
                                onChange={(e) => setData({ ...data, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium text-gray-700">Email</label>
                            <input 
                                type="email" 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                placeholder="example@mail.com"
                                value={data.email}
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-lg font-medium text-gray-700">Password</label>
                            <input 
                                type="password" 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                placeholder="Enter password"
                                value={data.password}
                                onChange={(e) => setData({ ...data, password: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium text-gray-700">Age</label>
                            <input 
                                type="text" 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                placeholder="Enter age"
                                value={data.age}
                                onChange={(e) => setData({ ...data, age: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-lg font-medium text-gray-700">Weight (lbs)</label>
                            <input 
                                type="text" 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                placeholder="Enter weight"
                                value={data.weightInLbs}
                                onChange={(e) => setData({ ...data, weightInLbs: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium text-gray-700">Height (inches)</label>
                            <select 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={data.heightInInches}
                                onChange={(e) => setData({ ...data, heightInInches: e.target.value })}
                            >
                                <option value="" disabled>Choose height</option>
                                {Array.from({length: 4}, (_, i) => i + 4).flatMap(feet =>
                                    Array.from({length: 12}, (_, j) => {
                                        const inches = j;
                                        const totalInches = feet * 12 + inches;
                                        return (
                                            <option  key={`${feet}-${inches}`} value={totalInches}>{feet}&#39;{inches}&#34; ({totalInches}&#34;)</option>
                                        );
                                    })
                                )}
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-lg font-medium text-gray-700">Gender</label>
                            <select 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={data.gender}
                                onChange={(e) => setData({ ...data, gender: e.target.value })}
                            >
                                <option value="" disabled>Choose a gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-lg font-medium text-gray-700">Physical Activity</label>
                            <select 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={data.TDEE}
                                onChange={(e) => setData({ ...data, TDEE: e.target.value })}
                            >
                                <option value="" disabled>Activity</option>
                                <option value="No-Exercise">Little to no exercise and work a desk job</option>
                                <option value="Light-Exercise">Light exercise 1-3 days per week</option>
                                <option value="Moderate-Exercise">Moderate exercise 3-5 days per week</option>
                                <option value="Heavy-Exercise">Heavy exercise 6-7 days per week</option>
                                <option value="Strenuous-Exercise">Strenuous training 2 times a day</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Goal Weight</label>
                        <input 
                            type="text" 
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                            placeholder="Your goal weight..."
                            value={data.goal}
                            onChange={(e) => setData({ ...data, goal: e.target.value })}
                        />
                    </div>
                    <div className="flex items-center mt-4">
                        <input 
                            type="checkbox" 
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            checked={data.agree === 'agreed'}
                            onChange={(e) => setData({ ...data, agree: 'agreed' })}
                        />
                        <label className="ml-2 block text-sm text-gray-900">
                            I agree to the <span className="font-medium text-indigo-600">Terms of Service</span> and <span className="font-medium text-indigo-600">Privacy Policy</span>.
                        </label>
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
                        >
                            Create Account
                        </button>
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-600">
                            Already have an account? <Link href='/login' className="font-medium text-indigo-600">Sign In</Link>
                        </p>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}



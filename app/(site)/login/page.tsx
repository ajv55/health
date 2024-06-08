'use client'
import { useState, useRef, useEffect } from "react";
import {signIn, useSession} from 'next-auth/react'
import {toast} from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

export default function Page() {
    const session = useSession();
    const router = useRouter();

    const ref = useRef<HTMLFormElement>(null);

    const [data, setData] = useState({
        email: '',
        password: ''
})

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        ref.current?.reset()
        console.log('this is where we are going to signin')
        signIn('credentials', {...data, redirect: false}).then((callback) => {
            if(callback?.error) {
                toast.error(callback.error)
            }

            if(callback?.ok && !callback?.error) {
                router.push('/dashboard')
                toast.success('you have successfully logged in')
            }
        })
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-lg w-full space-y-8">
      <div>
        <h2 className="mt-6 text-center text-5xl leading-12 font-extrabold text-indigo-600">
          Sign in to your account
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-lg shadow-indigo-100">
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={data.email} 
              onChange={(e) => setData({...data, email: e.target.value}) }
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-xl"
              placeholder="Email address"
            />
          </div>
          <div className="-mt-px">
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={data.password} 
              onChange={(e) => setData({...data, password: e.target.value}) }
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-xl"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900">
              Remember me
            </label>
          </div>

          <div className="text-sm leading-5">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </div>

        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm leading-5">
            <span className="px-2 bg-gray-100 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <div>
          <button
            type="button"
            onClick={() => signIn('google')} 
            className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path
                fill="#4285F4"
                d="M24 9.5c3.15 0 5.72 1.18 7.57 3.08l5.67-5.67C33.69 4.09 29.24 2 24 2 14.78 2 7.16 7.82 4.57 16h7.84c1.22-3.72 4.71-6.5 8.59-6.5z"
              />
              <path
                fill="#34A853"
                d="M46.46 24.46c0-1.45-.14-2.84-.39-4.17H24v8.25h12.6c-.55 2.89-2.08 5.3-4.47 6.96l7.12 5.54c4.13-3.8 6.21-9.41 6.21-16.58z"
              />
              <path
                fill="#FBBC05"
                d="M11.21 28.94c-1.48-.87-2.76-2.15-3.63-3.63H.55v7.84c2.84 5.57 8.66 9.5 15.45 9.5 4.35 0 8.21-1.57 11.3-4.17l-7.12-5.54c-1.22.78-2.7 1.25-4.18 1.25-3.88 0-7.09-2.62-8.19-6.25z"
              />
              <path
                fill="#EA4335"
                d="M24 46c6.13 0 11.27-2.12 15.03-5.76l-7.12-5.54c-2.22 1.5-4.97 2.39-7.91 2.39-5.98 0-11.1-4.02-12.94-9.39H.55v7.84C3.73 41.74 12.94 46 24 46z"
              />
            </svg>
            Sign in with Google
          </button>
        </div>
      </form>
      <div className="mt-6 text-center text-sm leading-5 text-gray-600">
        <p>
          Don&#39;t have an account?{' '}
          <Link href="/reg" className="font-medium text-indigo-600 hover:text-indigo-500">
            Register here
          </Link>
        </p>
      </div>
    </div>
  </div>
  )
}


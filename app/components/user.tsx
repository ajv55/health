'use client';
import React from 'react'
import {useSession} from 'next-auth/react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

type currentUserProp = {
  email: string
  name: string
}

export default function User() {

  const [userData, setUserData] = useState([]);
  const [currentUser, setCurrentUser] = useState<currentUserProp>({
    email: '',
    name: ''
  });
    const {data: session} = useSession();

    

  return (
    <div>
        {session?.user.email} {session?.user.name}
    </div>
  )
}

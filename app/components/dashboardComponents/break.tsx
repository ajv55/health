import React from 'react'

export default async function Break() {

    const res = await fetch('/api/nutrition');
    const data = await res.json();

    console.log(data)

  return (
    <div></div>
  )
}

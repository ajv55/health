import React from 'react'

type Day2Props = {
  onClick: () => void
}

export default function Day2({onClick}: Day2Props) {
  return (
    <div onClick={onClick} className="w-[15%] h-full border flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-center">Day <br /> 2</h1>
    </div>
  )
}

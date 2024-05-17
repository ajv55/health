

export default function SupportHeader() {
  return (
    <div className='bg-center bg-cover flex flex-col justify-center items-center w-full h-screen' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/support.png")'}}>
        <h1 className="text-7xl text-white font-bold tracking-wide">Welcome to Our <span className=" bg-gradient-to-br from-orange-900 via-orange-500 to-orange-300 bg-clip-text text-transparent">Support</span> Page</h1>
    </div>
  )
}

import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <div className="flex items-center space-x-4 justify-between md:space-x-10">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer"> WEBFILM </h1>
        <ul className="hidden space-x-4 md:flex text-white ">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div>
        <button className="text-white pr-4">Sign In</button>
        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar

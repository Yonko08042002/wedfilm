const Row = () => {
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">a</h2>
      <div className="relative flex items-center group">
        <div
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={'slider' + 1}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        ></div>
        <div
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  )
}

export default Row

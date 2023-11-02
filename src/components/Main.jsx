const Main = () => {
  return (
    <div className="w-full h-[600px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src="https://ecdn.game4v.com/g4v-content/uploads/2021/11/06205058/NWH0-1636206658-86.jpg"
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">Film Name</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">Play</button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">Watch Later</button>
          </div>
          <p className="text-gray-400 text-sm">Released: 30/10/2022</p>
          <p className="w-full md:max-w-[95%] lg:max-w-[90%] xl:max-w-[95%] text-gray-200">
            Người Nhện là một bộ phim siêu anh hùng năm 2002 của Mỹ, là phim đầu tiên trong loạt phim Người Nhện dựa
            trên các nhân vật hư cấu Người Nhện của Marvel Comics. Phim được đạo diễn bởi Sam Raimi và kịch bản viết bởi
            David Koepp. Nhân vật chính Người Nhện là Peter Parker do Tobey Maguire thủ vai, Peter Parker là một học
            sinh trung học đã chuyển thành người chống lại tội phạm sau khi phát triển các khả năng như nhện, cùng với
            Willem Dafoe trong vai Norman Osborn (Green Goblin), Kirsten Dunst trong vai người yêu của Peter Mary-Jane
            Watson, và James Franco trong vai người bạn tốt nhất của ông Harry Osborn.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main

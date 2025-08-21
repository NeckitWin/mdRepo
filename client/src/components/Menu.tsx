const Menu = () => {
  const menuButtons = [
    {
      id: 'sort',
      label: 'Sort',
      className: 'bg-[#1E1A1A] hover:bg-[#2A2626] border-neutral-600 hover:border-neutral-500 text-neutral-200 hover:text-white',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-4 h-4 fill-current">
          <path d="M130.4 268.2C135.4 280.2 147 288 160 288L480 288C492.9 288 504.6 280.2 509.6 268.2C514.6 256.2 511.8 242.5 502.7 233.3L342.7 73.3C330.2 60.8 309.9 60.8 297.4 73.3L137.4 233.3C128.2 242.5 125.5 256.2 130.5 268.2zM130.4 371.7C125.4 383.7 128.2 397.4 137.3 406.6L297.3 566.6C309.8 579.1 330.1 579.1 342.6 566.6L502.6 406.6C511.8 397.4 514.5 383.7 509.5 371.7C504.5 359.7 492.9 352 480 352L160 352C147.1 352 135.4 359.8 130.4 371.8" />
        </svg>
      )
    },
    {
      id: 'download',
      label: 'Download all',
      className: 'bg-[#1E1A1A] hover:bg-[#2A2626] border-neutral-600 hover:border-neutral-500 text-neutral-200 hover:text-white',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M12 16L7 11L8.4 9.6L11 12.2V4H13V12.2L15.6 9.6L17 11L12 16ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.02 19.412 19.412C19.02 19.804 18.55 20 18 20H6Z" />
        </svg>
      )
    },
    {
      id: 'upload',
      label: 'Upload',
      className: 'bg-[#1E1A1A] hover:bg-[#2A2626] border-neutral-600 hover:border-neutral-500 text-neutral-200 hover:text-white',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
        </svg>
      )
    },
    {
      id: 'new',
      label: 'New',
      className: 'bg-blue-600 hover:bg-blue-700 border-blue-500 hover:border-blue-400 text-white',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-[#252525] shadow-sm shadow-neutral-700 rounded-md">
      <div className="flex">
        <input type="text" placeholder="Search notes..."
          className="w-full outline-none bg-[#1E1A1A] text-neutral-200 text-sm px-4 py-3 rounded-l-md placeholder-neutral-400" />
        <button type='button' className="flex items-center justify-center bg-neutral-900 px-8 cursor-pointer rounded-r-md">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-white">
            <path
              d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193">
            </path>
          </svg>
        </button>
      </div>
      <div className="p-2 flex gap-2">
        {menuButtons.map((button) => (
          <button 
            key={button.id}
            className={`cursor-pointer flex-1 flex items-center justify-center gap-1.5 px-3 py-1 rounded-md transition-all duration-200 shadow-sm hover:shadow-md border ${button.className}`}
          >
            {button.icon}
            <span className="text-sm font-medium">{button.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Menu;

import { useAppDispatch } from "../app/hooks";
import { addNote, deleteAllNotes } from "../features/notesSlice";
import type { MenuButtonType } from "../lib/types";
import sortSVG from '../assets/sort.svg';
import exportSVG from '../assets/download.svg';
import uploadSVG from '../assets/upload.svg';
import deleteSVG from '../assets/bin.svg';
import plusSVG from '../assets/plus.svg';
import MenuButton from "../ui/MenuButton";

const Menu = () => {
  const dispatch = useAppDispatch();

  const menuButtons: MenuButtonType[] = [
    {
      id: 'sort',
      label: 'Sort',
      className: 'bg-[#1E1A1A] hover:bg-[#2A2626] border-neutral-600 hover:border-neutral-500 text-neutral-200 hover:text-white',
      icon: sortSVG
    },
    {
      id: 'export',
      label: 'Export all',
      className: 'bg-[#1E1A1A] hover:bg-[#2A2626] border-neutral-600 hover:border-neutral-500 text-neutral-200 hover:text-white',
      icon: exportSVG
    },
    {
      id: 'deleteAll',
      label: 'Delete All',
      className: 'bg-red-700/50 hover:bg-red-700/40 border-neutral-600 hover:border-neutral-500 text-neutral-200 hover:text-white',
      icon: deleteSVG,
      action: () => dispatch(deleteAllNotes())
    },
    {
      id: 'upload',
      label: 'Upload',
      className: 'bg-green-400/50 hover:bg-green-400/40 border-neutral-600 hover:border-neutral-500 text-neutral-200 hover:text-white',
      icon: uploadSVG
    },
    {
      id: 'new',
      label: 'New',
      className: 'bg-blue-600 hover:bg-blue-700 border-blue-500 hover:border-blue-400 text-white',
      icon: plusSVG,
      action: () => dispatch(addNote())
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
          <MenuButton key={button.id} button={button} />
        ))}
      </div>
    </div>
  )
}

export default Menu;

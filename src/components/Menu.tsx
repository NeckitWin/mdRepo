import { useAppDispatch } from "../app/hooks";
import { addNote, deleteAllNotes } from "../features/notesSlice";
import type { MenuButtonType } from "../lib/types";
import { Icons } from "../ui/icons";
import MenuButton from "../ui/MenuButton";

const Menu = () => {
  const dispatch = useAppDispatch();

  const menuButtons: MenuButtonType[] = [
    {
      id: 'sort',
      label: 'Sort',
      className: 'bg-[#1E1A1A] hover:bg-[#2A2626] border-neutral-600 hover:border-neutral-500',
      icon: Icons.Sort
    },
    {
      id: 'export',
      label: 'Export all',
      className: 'bg-[#1E1A1A] hover:bg-[#2A2626] border-neutral-600 hover:border-neutral-500',
      icon: Icons.Download
    },
    {
      id: 'deleteAll',
      label: 'Delete All',
      className: 'bg-red-700/50 hover:bg-red-700/40 border-neutral-600 hover:border-neutral-500',
      icon: Icons.Bin,
      action: () => dispatch(deleteAllNotes())
    },
    {
      id: 'upload',
      label: 'Upload',
      className: 'bg-green-400/50 hover:bg-green-400/40 border-neutral-600 hover:border-neutral-500',
      icon: Icons.Upload
    },
    {
      id: 'new',
      label: 'New',
      className: 'bg-blue-600 hover:bg-blue-700 border-blue-500 hover:border-blue-400',
      icon: Icons.Plus,
      action: () => dispatch(addNote())
    }
  ];

  return (
    <div className="bg-[#252525] shadow-sm shadow-neutral-700 rounded-md">
      <div className="flex">
        <input type="text" placeholder="Search notes..."
          className="w-full outline-none bg-[#1E1A1A] text-neutral-200 text-sm px-4 py-3 rounded-l-md placeholder-neutral-400" />
        <button type='button' className="flex items-center justify-center bg-neutral-900 px-8 cursor-pointer rounded-r-md">
          <Icons.Search width="16px" className="fill-white" />
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

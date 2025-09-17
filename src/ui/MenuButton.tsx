import type { MenuButtonType } from "../lib/types";

const MenuButton = ({button}: {button: MenuButtonType}) => {
    return (
        <button onClick={button.action}
            className={` text-neutral-200 cursor-pointer flex-1 flex items-center justify-center gap-1.5 px-3 py-1 rounded-md transition-all duration-200 shadow-sm hover:shadow-md border ${button.className}`}
          >
            <button.icon className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">{button.label}</span>
          </button>
    );
}

export default MenuButton;
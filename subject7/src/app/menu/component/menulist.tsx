import React from "react";

interface MenuListProps {
  menus: string[];
  onMenuClick: (menu: string) => void;
}

const MenuList: React.FC<MenuListProps> = ({ menus, onMenuClick }) => {
  return (
    <div className="w-151">
      <ul>
        {menus.map((menu) => (
          <li key={menu} onClick={() => onMenuClick(menu)}>
            {menu}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
'use client'

import React, { useState } from 'react';

// 상태를 담을 타입 정의
type MenuState = 'default' | 'menu1' | 'menu2';


const MenuComponent: React.FC = () => {
  // 현재 선택된 메뉴의 상태
  const [selectedMenu, setSelectedMenu] = useState<MenuState>('default');

  // 각 메뉴에 대한 데이터
  const menuData: Record<MenuState, string> = {
    default: '기본 데이터',
    menu1: '메뉴 1에 대한 데이터',
    menu2: '메뉴 2에 대한 데이터',
    // 추가적인 메뉴와 데이터들
  };

  // 메뉴를 클릭할 때 실행되는 함수
  const handleMenuClick = (menu: MenuState) => {
    setSelectedMenu(menu);
  };

  return (
    <div>
      <ul>
        <li onClick={() => handleMenuClick('default')}>Default</li>
        <li onClick={() => handleMenuClick('menu1')}>Menu 1</li>
        <li onClick={() => handleMenuClick('menu2')}>Menu 2</li>
        {/* 추가적인 메뉴들에 대한 li 태그들 */}
      </ul>

      <div>
        <h2>{selectedMenu}</h2>
        <p>{menuData[selectedMenu]}</p>
      </div>
    </div>
  );
};

export default MenuComponent;
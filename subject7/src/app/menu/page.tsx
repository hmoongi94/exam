'use client'

import React, { useState } from "react";
import MenuList from "./component/menulist";
import MenuDetail from "./component/menudetail";
import SearchBar from "./component/searchbar";
import studentData from "./studentData.json";

type Studentdata = {
  [key: string]: {
    소개: string | number;
    장점: string | number;
  };
};

const MenuComponent: React.FC = () => {
  const studentdata: Studentdata = studentData;

  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchedData, setSearchedData] = useState<{
    소개: string | number;
    장점: string | number;
  } | null>(null);

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
    setSearchTerm("");
    setSearchedData(null);
  };

  const handleSearchSubmit = () => {
    const menu = searchTerm.trim();

    if (menu && studentdata.hasOwnProperty(menu)) {
      setSelectedMenu(menu);
      setSearchedData(studentdata[menu]);
    } else {
      setSelectedMenu(null);
      setSearchedData(null);
    }
  };

  return (
    <div className="w-screen h-screen bg-mainColor flex justify-center ">
      <MenuList menus={Object.keys(studentdata)} onMenuClick={handleMenuClick} />
      <div className="w-500 h-638">
        {(selectedMenu || searchedData) && (
          <>
            <MenuDetail
              title={selectedMenu || searchTerm}
              content={(selectedMenu ? studentdata[selectedMenu] : searchedData)?.소개}
            />
            <MenuDetail
              title={selectedMenu || searchTerm}
              content={(selectedMenu ? studentdata[selectedMenu] : searchedData)?.장점}
            />
          </>
        )}
      </div>
      <SearchBar onSearchSubmit={handleSearchSubmit} />
    </div>
  );
};

export default MenuComponent;
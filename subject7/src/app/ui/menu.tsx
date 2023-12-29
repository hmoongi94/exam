"use client";

import studentData from "./studentData.json";
import React, { useState } from "react";

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
    <div>
      <div>
        <ul>
          {/* 고정된 메뉴항목만 보여주기 */}
          {Object.keys(studentdata).map((menu) => (
            <li key={menu} onClick={() => handleMenuClick(menu)}>
              {menu}
            </li>
          ))}
        </ul>
        <div>
          <div>
            {(selectedMenu || searchedData) && (
              <>
                <h2>{selectedMenu || searchTerm}의 소개</h2>
                <p>
                  {
                    (selectedMenu ? studentdata[selectedMenu] : searchedData)
                      ?.소개
                  }
                </p>
                <h2>{selectedMenu || searchTerm}의 장점</h2>
                <p>
                  {
                    (selectedMenu ? studentdata[selectedMenu] : searchedData)
                      ?.장점
                  }
                </p>
              </>
            )}
          </div>
          <div>
            {/* 검색어 입력란 */}
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="메뉴항목 검색"
              className="border p-2 rounded-md text-black"
            />
            {/* 검색 버튼 */}
            <button onClick={handleSearchSubmit}>검색</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;

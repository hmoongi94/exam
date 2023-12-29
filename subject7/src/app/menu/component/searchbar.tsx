import React, { useState } from "react";

interface SearchBarProps {
  onSearchSubmit: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchSubmit = () => {
    onSearchSubmit(searchTerm.trim());
  };

  return (
    <div className="flex flex-col w-500 h-121">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="메뉴항목 검색"
        className="border p-2 rounded-md text-black"
      />
      <button onClick={handleSearchSubmit}>검색</button>
    </div>
  );
};

export default SearchBar;
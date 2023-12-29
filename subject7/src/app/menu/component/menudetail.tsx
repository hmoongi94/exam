// MenuDetail.tsx
import React from "react";

interface MenuDetailProps {
  title: string;
  content: string | number;
}

const MenuDetail: React.FC<MenuDetailProps> = ({ title, content }) => {
  return (
    <div>
      <h1 className="w-500 h-81 text-3xl font-bold">{title}</h1>
      <p className="w-500 h-238">{content}</p>
    </div>
  );
};

export default MenuDetail;
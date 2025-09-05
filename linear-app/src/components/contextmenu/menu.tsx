import React from 'react';

interface MenuProps {
  id: string;
  size?: string;
  filterKeyword?: boolean;
  searchPlaceholder?: string;
  onKeywordChange?: (kw: string) => void;
  className?: string;
  children: React.ReactNode;
}

export const Menu = ({ children }: MenuProps) => {
  return (
    <div className="bg-white rounded shadow-lg p-2">
      {children}
    </div>
  );
};

Menu.Item = function MenuItem({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <div className="cursor-pointer px-2 py-1 hover:bg-gray-100" onClick={onClick}>
      {children}
    </div>
  );
};

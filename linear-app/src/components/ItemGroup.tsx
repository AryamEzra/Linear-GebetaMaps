import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';
import { useState } from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
}
export default function ItemGroup({ title, children }: Props) {
  const [showItems, setShowItems] = useState(true);
  const Icon = showItems ? MdKeyboardArrowDown : MdKeyboardArrowRight;
  return (
    <div className="flex flex-col w-full text-sm">
      <div
        className="px-2 relative w-full mt-0.5 h-7 flex items-center rounded hover:bg-gray-100 cursor-pointer"
        onClick={() => setShowItems(!showItems)}
      >
        <Icon className="w-3 h-3 mr-2 -ml-1" />
        {title}
      </div>
      {showItems && children}
    </div>
  );
}

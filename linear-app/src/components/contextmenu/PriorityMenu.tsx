

import React, { useState, useRef } from 'react';
import type { ReactNode } from 'react';
import HighPriorityIcon from '/assets/icons/signal-strong.svg';
import LowPriorityIcon from '/assets/icons/signal-weak.svg';
import MediumPriorityIcon from '/assets/icons/signal-medium.svg';
import NoPriorityIcon from '/assets/icons/dots.svg';
import UrgentPriorityIcon from '/assets/icons/rounded-claim.svg';

interface Props {
  button: ReactNode;
  className?: string;
  onSelect?: (item: string) => void;
}

const PRIORITIES = [
  { icon: NoPriorityIcon, label: 'No priority', value: 'no_priority' },
  { icon: UrgentPriorityIcon, label: 'Urgent', value: 'urgent' },
  { icon: HighPriorityIcon, label: 'High', value: 'high' },
  { icon: MediumPriorityIcon, label: 'Medium', value: 'medium' },
  { icon: LowPriorityIcon, label: 'Low', value: 'low' },
];

const PriorityMenu: React.FC<Props> = ({ button, className, onSelect }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on click outside
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (open && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <div className={className} style={{ position: 'relative', display: 'inline-block' }}>
      <span onClick={() => setOpen((v) => !v)} style={{ cursor: 'pointer' }}>{button}</span>
      {open && (
        <div
          ref={menuRef}
          className="absolute z-50 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg"
        >
          {PRIORITIES.map(({ icon, label, value }) => (
            <button
              key={value}
              className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100 focus:outline-none"
              onClick={() => {
                setOpen(false);
                if (onSelect) onSelect(value);
              }}
            >
              <img src={icon} className="mr-2 w-4 h-4" alt={label} />
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PriorityMenu;

import { useState } from 'react';

export default function Toggle() {
  const [on, setOn] = useState(false);
  return (
    <button
      className={`w-10 h-6 flex items-center bg-gray-200 rounded-full p-1 transition-colors duration-300 ${on ? 'bg-blue-500' : ''}`}
      onClick={() => setOn(!on)}
    >
      <span
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${on ? 'translate-x-4' : ''}`}
      />
    </button>
  );
}

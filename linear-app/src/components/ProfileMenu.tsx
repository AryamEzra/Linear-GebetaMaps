export default function ProfileMenu({ isOpen, onDismiss, className }: { isOpen: boolean; onDismiss: () => void; className?: string }) {
  if (!isOpen) return null;
  return (
    <div className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50 ${className ?? ''}`}>
      <div className="p-4">
        <div className="font-bold">Profile</div>
        <div className="mt-2 text-gray-600">Settings</div>
        <div className="mt-2 text-gray-600">Logout</div>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded" onClick={onDismiss}>Close</button>
      </div>
    </div>
  );
}

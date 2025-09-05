interface Props {
  isOpen: boolean;
  onDismiss: () => void;
}

export default function ViewOptionMenu({ isOpen, onDismiss }: Props) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-4">View Options</h2>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={onDismiss}>Close</button>
      </div>
    </div>
  );
}

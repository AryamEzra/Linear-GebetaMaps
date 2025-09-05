// Placeholder for IssueModal. You can add full logic later.
import Modal from './Modal';
import Toggle from './Toggle';

interface Props {
  isOpen: boolean;
  onDismiss?: () => void;
}

export default function IssueModal({ isOpen, onDismiss }: Props) {
  return (
    <Modal isOpen={isOpen} title="New Issue" onDismiss={onDismiss}>
      <div className="flex flex-col w-full px-8 py-6 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Create a new issue</h2>
        <input className="mb-4 w-full px-3 py-1.5 border-gray-300 border rounded outline-none" placeholder="Issue title" />
        <textarea className="mb-4 w-full px-3 py-1.5 border-gray-300 border rounded outline-none" placeholder="Description" />
        <div className="flex items-center justify-between w-full mt-2">
          <Toggle />
          <button className="h-8 px-8 text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:outline-none">Save Issue</button>
        </div>
      </div>
    </Modal>
  );
}

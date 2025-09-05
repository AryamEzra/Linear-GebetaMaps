import Avatar from '../../components/Avatar';
import { memo } from 'react';
import { useStore } from '../../store/useStore';
import type { Issue } from '../../types/issue';
import PriorityIcon from '../../components/PriorityIcon';
import PriorityMenu from '../../components/contextmenu/PriorityMenu';


interface IssueProps {
  issue: Issue;
  index: number;
}

const IssueItem = ({ issue }: IssueProps) => {
  const priorityIcon = (
    <span className="inline-block m-0.5 rounded-sm border border-gray-100 hover:border-gray-200 p-0.5">
      <PriorityIcon priority={issue.priority} />
    </span>
  );

  const { updateIssuePriority } = useStore();
  const updatePriority = (priority: string) => {
    updateIssuePriority(issue, priority);
  };

  return (
    <div className="cursor-default flex flex-col w-full px-4 py-3 mb-2 bg-white rounded focus:outline-none">
      <div className="flex justify-between w-full cursor-default">
        <div className="flex flex-col">
          <span className="text-xs font-normal text-gray-500 uppercase">
            {issue.id}
          </span>
          <span className="mt-1 text-sm font-medium text-gray-700 line-clamp-2 overflow-ellipsis">
            {issue.title}
          </span>
        </div>
        <div className="flex-shrink-0">
          {issue.owner ? (
            <Avatar
              name={issue.owner.name}
              avatarUrl={issue.owner.avatar}
            />
          ) : (
            <Avatar />
          )}
        </div>
      </div>
      <div className="mt-2.5 flex items-center">
        <PriorityMenu
          button={priorityIcon}
          onSelect={updatePriority}
        />
      </div>
    </div>
  );
};

export default memo(IssueItem);

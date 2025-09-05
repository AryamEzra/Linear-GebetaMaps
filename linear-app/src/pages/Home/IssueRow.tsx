import PriorityMenu from '../../components/contextmenu/PriorityMenu';
import PriorityIcon from '../../components/PriorityIcon';
import StatusIcon from '../../components/StatusIcon';
import Avatar from '../../components/Avatar';
import type { Issue } from '../../types/issue';

interface Props {
  issue: Issue;
  onChangePriority?: (issue: Issue, priority: string) => void;
}

export default function IssueRow({ issue, onChangePriority }: Props) {
  const priorityIcon = <PriorityIcon priority={issue.priority} />;
  const statusIcon = <StatusIcon status={issue.status} />;

  const handleChangePriority = (p: string) => {
    if (onChangePriority) onChangePriority(issue, p);
  };

  return (
    <div className="inline-flex items-center w-full min-w-0 pl-2 pr-8 text-sm border-b border-gray-100 hover:bg-gray-100 h-11">
      <div className="flex-shrink-0 ml-2">
        <PriorityMenu
          button={<div className="flex-shrink-0 ml-2">{priorityIcon}</div>}
          onSelect={handleChangePriority}
        />
      </div>
      <div className="flex-shrink-0 ml-2 font-normal text-gray-500 w-11">
        {issue.id}
      </div>
      <div className="flex-shrink-0 ml-2">
        {statusIcon}
      </div>
      <div className="flex-wrap flex-shrink ml-2 overflow-hidden font-medium line-clamp-1 overflow-ellipsis">
        {issue.title || ''}
      </div>
      <div className="flex flex-grow ml-2"></div>
      <div className="flex-shrink-0 ml-auto">
        {issue.owner && issue.owner.avatar ? (
          <Avatar name={issue.owner.name} avatarUrl={issue.owner.avatar} />
        ) : (
          <Avatar />
        )}
      </div>
    </div>
  );
}

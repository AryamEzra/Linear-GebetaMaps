import { useEffect } from 'react';
import { useStore } from '../../store/useStore';
import IssueRow from './IssueRow';


export default function IssueList() {
  const { issues, loadIssues, updateIssuePriority } = useStore();

  useEffect(() => {
    loadIssues();
  }, [loadIssues]);

  // Flatten and sort issues
  let allIssues = [
    ...issues.backlog,
    ...issues.todo,
    ...issues.inProgress,
    ...issues.done,
    ...issues.canceled,
  ];
  allIssues = allIssues.sort((a, b) => {
    const aId = parseInt((a.id || '').split('-')[1] || '0');
    const bId = parseInt((b.id || '').split('-')[1] || '0');
    return aId - bId;
  });

  return (
    <div className="flex flex-col overflow-auto">
      {allIssues.map((issue) => (
        <IssueRow
          key={issue.id}
          issue={issue}
          onChangePriority={updateIssuePriority}
        />
      ))}
    </div>
  );
}

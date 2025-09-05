import { useEffect } from 'react';
import { useStore } from '../../store/useStore';
import IssueCol from './IssueCol';

export default function IssueBoard() {
  const { issues, loadIssues } = useStore();

  useEffect(() => {
    loadIssues();
  }, [loadIssues]);

  return (
    <div className="flex flex-1 pt-6 pl-8 overflow-scroll bg-gray-100">
  <IssueCol title={'Backlog'} status={'backlog'} issues={issues.backlog} />
  <IssueCol title={'Todo'} status={'todo'} issues={issues.todo} />
  <IssueCol title={'In Progress'} status={'in_progress'} issues={issues.inProgress} />
  <IssueCol title={'Done'} status={'done'} issues={issues.done} />
  <IssueCol title={'Canceled'} status={'canceled'} issues={issues.canceled} />
    </div>
  );
}

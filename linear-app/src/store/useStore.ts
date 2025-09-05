import { create } from 'zustand';
import type { Issue } from '../types/issue';


interface IssuesState {
  issues: {
    backlog: Issue[];
    todo: Issue[];
    inProgress: Issue[];
    done: Issue[];
    canceled: Issue[];
  };
  loadIssues: () => void;
  updateIssuePriority: (issue: Issue, priority: string) => void;
}

const initialIssues = {
  backlog: [],
  todo: [],
  inProgress: [],
  done: [],
  canceled: [],
};

export const useStore = create<IssuesState>((set) => ({
  issues: initialIssues,
  loadIssues: () => {
    // Example: load static issues for now
    set({
      issues: {
        backlog: [
          {
            id: 'BL-1',
            title: 'Example Backlog Issue',
            description: 'This is a backlog issue.',
            priority: 'no_priority',
            status: 'backlog',
            createdAt: new Date(),
            owner: { name: 'User', avatar: '' },
          },
        ],
        todo: [],
        inProgress: [],
        done: [],
        canceled: [],
      },
    });
  },
  updateIssuePriority: (issue, priority) => {
    set((state) => {
      // Find and update the issue's priority
      const update = (arr: Issue[]) =>
        arr.map((i) => (i.id === issue.id ? { ...i, priority } : i));
      return {
        issues: {
          backlog: update(state.issues.backlog),
          todo: update(state.issues.todo),
          inProgress: update(state.issues.inProgress),
          done: update(state.issues.done),
          canceled: update(state.issues.canceled),
        },
      };
    });
  },
}));
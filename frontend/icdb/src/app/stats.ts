import { User } from './user';

export interface Stats {
  total: number;
  weeks: Week[];
  author: User;
}

export interface Week {
  start: number;
  additions: number;
  deletions: number;
  commits: number;
}

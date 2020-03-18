import { User } from './user';

export interface Stats {
  0: Contributor;
  1: Contributor;
  2: Contributor;
  3: Contributor;
  4: Contributor;
  5: Contributor;
}

export interface Contributor {
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

import { Issue } from './issue';

export interface IssuePage {
  page_num: number;
  pages_total: number;
  response: string;
  results: Issue[];
}

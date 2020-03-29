import { Author } from './author';

export interface AuthorPage {
  page_num: number;
  pages_total: number;
  response: string;
  results: Author[];
}

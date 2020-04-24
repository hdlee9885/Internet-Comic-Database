import { Search } from './search';

export interface SearchResults{
    page_num: number;
    pages_total: number;
    response: string;
    results:  Search[];
  }
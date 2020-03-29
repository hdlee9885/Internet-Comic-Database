import { Character } from './character';

export interface CharacterPage {
  page_num: number;
  pages_total: number;
  response: string;
  results: Character[];
}

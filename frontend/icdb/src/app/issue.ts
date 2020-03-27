import { Character } from './character';
import { Author } from './author';

export interface Issue {
  name: string;
  mainCharacter: Character;
  characters: Character[];
  description: string;
  mainAuthor: Author;
  authors: Author[];
  imageUrl: string;
  coverDate: string;
  series: string;
}

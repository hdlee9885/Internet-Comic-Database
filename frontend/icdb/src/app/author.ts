import { Character } from './character';
import { Issue } from './issue';

export interface Author {
  name: string;
  mainCharacter: Character;
  characters: Character[];
  mainIssue: Issue;
  issues: Issue[];
  description: string;
  deck: string;
  country: string;
  imageUrl: string;
  birthDate: string;
  deathDate: string;
}

import { Author } from './author';
import { Issue } from './issue';

export interface Character {
  name: string;
  realName: string;
  aliases: string[];
  imageUrl: string;
  firstAppearedIn: Issue;
  mainAuthor: Author;
  authors: Author[];
  deck: string;
  description: string;
  alignment: string;
}

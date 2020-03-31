import { Appearance } from './appearance';

export interface Character {
  aliases: string;
  alignment: string;
  api_detail_url: string;
  appearance: Appearance;
  creators: string[];
  deck: string;
  description: string;
  first_appeared_in_issue: string;
  image: string;
  name: string;
  real_name: string;
}

export interface SingleCharacter {
  response: string;
  results: Character;
}

export interface Author {
  aliases: string;
  birth: string;
  characters: string[];
  country: string;
  death: string;
  deck: string;
  description: string;
  hometown: string;
  image: string;
  issues: string[];
  name: string;
}

export interface SingleAuthor {
  response: string;
  results: Author;
}

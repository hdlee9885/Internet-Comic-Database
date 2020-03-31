export interface Issue {
  character_credits: string[];
  cover_date: string;
  description: string;
  name: string;
  person_credits: string[];
  series: string;
  image: string;
}

export interface SingleIssue {
  response: string;
  results: Issue;
}

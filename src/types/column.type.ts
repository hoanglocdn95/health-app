export interface HashtagType {
  tag: string;
  link: string;
}

export interface RecommendType {
  id: string;
  content: string;
  date: string;
  hashtags: HashtagType[];
  illustrationSrc: string;
}

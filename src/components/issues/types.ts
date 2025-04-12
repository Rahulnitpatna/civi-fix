
export interface Story {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  location: string;
  timestamp: string;
  status: string;
  upvotes: number;
  downvotes: number;
  comments: number;
}

export type VoteType = 'up' | 'down' | null;
export type VotedState = Record<number, VoteType>;

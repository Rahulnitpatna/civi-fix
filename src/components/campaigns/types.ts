
export interface Campaign {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  progress: number;
  participants: number;
  joined?: boolean;
}

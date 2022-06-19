export type User = {
  id: string;
  username: string;
  name: string;
  profilePicture: string;
};

export enum Level {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
  Legendary = 'legendary',
}

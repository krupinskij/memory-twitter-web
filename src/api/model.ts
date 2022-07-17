import { Level } from 'model';

export type AuthLink = {
  url: string;
};

export type UserResult = {
  clicks: number;
  timeElapsed: number;
  level: Level;
};

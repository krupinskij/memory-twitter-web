import { Level } from 'model';

export type AuthLink = {
  url: string;
};

export type UserResult = {
  clicks: number;
  time: number;
  level: Level;
};

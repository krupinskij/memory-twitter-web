export type User = {
  id: string;
  un: string;
  nm: string;
  pp: string;
};

export enum Level {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
  Legendary = 'legendary',
}

export const MapLevel: Record<Level, number> = {
  [Level.Easy]: 8,
  [Level.Medium]: 12,
  [Level.Hard]: 16,
  [Level.Legendary]: 36,
};

export const MapLayout: Record<number, [number, number]> = {
  [16]: [4, 4],
  [24]: [4, 6],
  [32]: [4, 8],
  [72]: [6, 12],
};

export enum CardType {
  Name = 'name',
  Picture = 'picture',
}

export type Card = {
  type: CardType;
  id: string;
  data: string;
};

export type Result = {
  id: string;
  user: User;
  clicks: number;
  time: number;
  createdAt: number;
};

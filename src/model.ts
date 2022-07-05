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

export enum CardType {
  Name = 'name',
  Picture = 'picture',
}

export type Card = {
  type: CardType;
  id: string;
  data: string;
};

import { Card } from 'model';

export const areCardsEqual = (card1: Card, card2: Card) => {
  return card1.id === card2.id && card1.type === card2.type;
};

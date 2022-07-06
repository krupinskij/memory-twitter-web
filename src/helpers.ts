import { MapLayout } from 'model';

export const randomizeIndexes = (length: number): number[] => {
  const randomIndexesSet = new Set<number>();
  const randomIndexesArr = [];

  while (randomIndexesSet.size < length) {
    let randomIdx = Math.floor(Math.random() * length);
    while (randomIndexesSet.has(randomIdx)) {
      randomIdx = (randomIdx + 1) % length;
    }

    randomIndexesSet.add(randomIdx);
    randomIndexesArr.push(randomIdx);
  }

  return randomIndexesArr;
};

export const calcDelay = (idx: number, length: number): number => {
  const [, cols] = MapLayout[length];
  const r = Math.floor(idx / cols);
  const c = idx - r * cols;

  return (r + c) / 20;
};

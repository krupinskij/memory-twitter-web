export const availableValues = [0, 0.5, 1, 1.5, 2] as const;
export type AnimationSpeed = typeof availableValues[number];

export type Settings = {
  animationSpeed: AnimationSpeed;
  changeAnimationSpeed: (animationSpeed: AnimationSpeed) => void;
};

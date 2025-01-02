type AnimationFunc = (delay?: number) => Promise<void>;

export type Animation = {
  show: AnimationFunc;
  hide: AnimationFunc;

  display: AnimationFunc;
  remove: AnimationFunc;
};

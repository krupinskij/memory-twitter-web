export enum ThemeBackground {
  Light = 'light',
  Dark = 'dark',
  Darker = 'darker',
}

export enum ThemeColor {
  Blue = 'blue',
  Yellow = 'yellow',
  Pink = 'pink',
  Purple = 'purple',
  Orange = 'orange',
  Green = 'green',
}

export type Theme = {
  themeBackground: ThemeBackground;
  changeThemeBackground: (themeBackground: ThemeBackground) => void;
  themeColor: ThemeColor;
  changeThemeColor: (themeColor: ThemeColor) => void;
};

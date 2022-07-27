export const formatProfilePicture = (pp: string | undefined, format: string): string => {
  if (pp) {
    return `https://pbs.twimg.com/profile_images/${pp.replace('$', format)}`;
  }

  return `https://abs.twimg.com/sticky/default_profile_images/default_profile${format}.png`;
};

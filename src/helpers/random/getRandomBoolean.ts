// RETURNS: true
// RETURNS: false

export const getRandomBoolean = (probability: number): boolean | null => {
  if (probability > 9) {
    // eslint-disable-next-line no-console
    console.error('Parameter should be single digit.');

    return null;
  }

  return Math.random() < probability / 10;
};

export default getRandomBoolean;

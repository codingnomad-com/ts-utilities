export const isValidJSON = (inputString: string): boolean => {
  try {
    JSON.parse(inputString);

    return true;
  } catch (e) {
    return false;
  }
};

export default isValidJSON;

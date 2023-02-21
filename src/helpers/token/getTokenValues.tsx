/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import atob from 'atob';

// RETURNS: token value

export const getTokenValues = (token: string, properties: string[]): any => {
  const tokenParts = token.split('.');
  const tokenData = JSON.parse(atob(tokenParts[1]));

  const tokenValues = properties.reduce((data: any, property: string) => {
    data[property] = tokenData[property];

    return data;
  }, {});

  return tokenValues;
};

export default getTokenValues;

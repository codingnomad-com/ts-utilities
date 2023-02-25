/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
  extends: '@codingnomad/eslint-config-cn',
  rules: {
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
  },
};

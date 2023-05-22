/* eslint-disable @typescript-eslint/no-explicit-any */
export const flatten = (data: any): any => {
  const result: any = {};

  const recurse = (cur: any, prop: any) => {
    if (Object(cur) !== cur) {
      result[prop] = cur;
    } else if (Array.isArray(cur)) {
      let i;
      const l = cur.length;

      for (i = 0, l; i < l; i++) {
        recurse(cur[i], prop ? `${prop}.${i}` : `${i}`);
      }

      if (l === 0) result[prop] = [];
    } else {
      let isEmpty = true;

      cur.forEach((item: any, index: number) => {
        isEmpty = false;

        recurse(item, prop ? `${prop}.${index}` : index);
      });

      if (isEmpty) result[prop] = {};
    }
  };

  recurse(data, '');

  return result;
};

export default flatten;

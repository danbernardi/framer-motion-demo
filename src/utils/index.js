import uniqid from 'uniqid';

export const generateIndexedArr = (count, offset = 0) => new Array(count)
  .fill(0)
  .map((item, i) => ({ id: uniqid(), index: i + offset }));

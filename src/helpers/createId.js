export const createUid = () => {
  return 'item' + new Date().getMilliseconds() + Math.floor(Math.random() * 1000);
};

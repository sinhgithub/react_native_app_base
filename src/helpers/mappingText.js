export const mappingText = (text, obj) => {
  if (!text || !obj) {
    return '';
  }
  let result = '';
  for (const k in obj) {
    if (k === text) {
      result = obj[k];
    }
  }
  return result;
};

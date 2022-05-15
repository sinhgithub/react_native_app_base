export const checkFlagFocus = (data, inputId) => {
  let flag = false;
  data?.forEach(item => {
    if (inputId === item.id) {
      flag = true;
    }
  });
  return flag;
};

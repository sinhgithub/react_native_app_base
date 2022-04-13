export const formatNumber = (x, coma) => {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, coma);
  } else {
    return 0;
  }
};

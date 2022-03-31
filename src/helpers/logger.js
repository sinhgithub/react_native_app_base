export function logger(msg, params, isWarning) {
  if (__DEV__ && !isWarning) {
    if (params) {
      console.log(msg, params);
    } else {
      console.log(msg);
    }
  }
  if (__DEV__ && isWarning) {
    if (params) {
      console.warn(msg, params);
    } else {
      console.warn(msg);
    }
  }
}

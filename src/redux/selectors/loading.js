export const getLoadingSelector = (state, actionTypes) => {
  if (Array.isArray(actionTypes)) {
    return actionTypes.some(r => {
      const matches = /(.*)_(HANDLER|SUCCESS|FAILURE|END)/.exec(r);
      if (!matches) {
        return false;
      }
      const [, requestName, requestState] = matches;
      return state?.loading?.[`${requestName}`] || false;
    });
  }
  return false;
};

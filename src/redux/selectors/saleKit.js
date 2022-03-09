export const saleKitListSelector = (state, cmsCategoryId) =>
  state.saleKit.saleKitList[cmsCategoryId + ''];
export const saleKitEndListSelector = (state, cmsCategoryId) =>
  state.saleKit.saleKitEndList[cmsCategoryId + ''];
export const saleKitListLoadingSelector = (state, cmsCategoryId) => state.saleKit.saleKitLoading;

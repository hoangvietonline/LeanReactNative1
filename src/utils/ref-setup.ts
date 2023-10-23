let loadingRef: any;
export const setLoadRef = (ref: any) => {
  loadingRef = ref;
};
export const showLoading = () => {
  loadingRef?.showLoading?.();
};

export const hideLoading = () => {
  loadingRef?.hideLoading?.();
};

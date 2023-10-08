import { Modal } from "react-native";
import { forwardRef, ForwardRefRenderFunction, memo, useImperativeHandle, useState } from "react";
import Loading from "../../atoms/Loading";

interface LoadingHandle {
  showLoading: () => void,
  hideLoading: () => void,

}

const [isLoading, setIsLoading] = useState(false);

const LoadingIndicator: ForwardRefRenderFunction<LoadingHandle> = (_, ref) => {
  useImperativeHandle(ref, () => ({
    showLoading: () => {
      setIsLoading(true);
    },
    hideLoading: () => {
      setIsLoading(false);
    }
  }));

  return <Modal transparent visible={isLoading}>
    <Loading />
  </Modal>;
};

export default memo(forwardRef(LoadingIndicator));

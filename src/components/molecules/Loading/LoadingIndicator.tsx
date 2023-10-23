import { Dimensions, Modal, StyleSheet } from "react-native";
import { forwardRef, ForwardRefRenderFunction, memo, useEffect, useImperativeHandle, useState } from "react";
import Loading from "../../atoms/Loading";
import { Colors } from "../../../styles/color";

interface LoadingHandle {
  showLoading: () => void,
  hideLoading: () => void,

}

const LoadingIndicator: ForwardRefRenderFunction<LoadingHandle> = (_, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  useImperativeHandle(ref, () => ({
    showLoading: () => {
      setIsLoading(true);
    },
    hideLoading: () => {
      setIsLoading(false);
    }
  }));

  const [wH, setCurrentWidth] = useState({first : 0,second : 0})
  useEffect(() => {
    const currentWidth = Dimensions.get("screen").width;
    const currentHeight = Dimensions.get("screen").height;
    setCurrentWidth({first: currentWidth,second: currentHeight});
  }, []);

  const styles = StyleSheet.create({

    pressArea: {
      width:wH.first,
      height:wH.second
    },
  });

  return (<Modal transparent visible={isLoading}>
    <Loading styleCustom={styles.pressArea}/>
  </Modal>);
};

export default memo(forwardRef(LoadingIndicator));

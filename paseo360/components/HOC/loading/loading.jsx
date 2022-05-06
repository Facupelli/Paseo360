import { useState } from "react";

export default function loadingHOC(WrappedComponent, loadingMessage) {
  function HOC(props) {
    const [isLoading, setLoading] = useState(true);

    const setLoadingState = (isComponentLoading) => {
      setLoading(isComponentLoading);
    };
    
    return (
      <>
        {isLoading && <p>{loadingMessage}</p>}
        <WrappedComponent {...props} setLoading={setLoadingState} />
      </>
    );
  }
  return HOC;
}

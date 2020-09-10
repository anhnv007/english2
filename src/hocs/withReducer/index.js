import React, { useReducer } from "react";
import logger from "use-reducer-logger";
let dspComplier = {};
let actCompiler = {};
let stCompiler = {};

const withReducer = props => Component => {
  const { action, reducer, initialState, key } = props;

  function WrapperReducer(childProps) {
    const [state, dispatch] = useReducer(logger(reducer), initialState);

    Object.assign(actCompiler, { [key]: action });
    Object.assign(stCompiler, { [key]: state });
    Object.assign(dspComplier, { [key]: dispatch });

    React.useEffect(() => {
      return () => {
        dspComplier = {};
        actCompiler = {};
        stCompiler = {};
      };
    }, []);

    return (
      <>
        <Component
          {...props}
          {...childProps}
          dispatch={dspComplier}
          action={actCompiler}
          state={stCompiler}
        />
      </>
    );
  }

  const Wrapper = props => {
    return <WrapperReducer {...props} />;
  };
  return Wrapper;
};

export default withReducer;

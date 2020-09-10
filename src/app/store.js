import React from "react";
export const StoreContext = React.createContext(null);

export default ({ children }) => {
  // các em đã vào nhà kho

  const [sharing, setSharing] = React.useState({});
  const [help, setHelp] = React.useState({});
  const [counter, setCounter] = React.useState(0);

  const onSetSharing = value => {
    setSharing(state => Object.assign(state, value));
  };

  const onSetHelp = value => {
    setHelp(state => Object.assign(state, value));
  };

  const cleanCache = () => {
    setSharing({});
    setHelp({});
  };

  const increment = () => {
    setCounter(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCounter(prevCount => (prevCount - 1 < 0 ? 0 : prevCount - 1));
  };

  const store = {
    sharing,
    help,
    setSharing: onSetSharing,
    setHelp: onSetHelp,
    cleanCache: cleanCache,
    counter,
    onLoading: {
      increment,
      decrement
    }
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

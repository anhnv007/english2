import React from "react";

const Permission = props => {
  const { component: Component } = props;
  return (
    <>
      <Component {...props} />
    </>
  );
};
export default Permission;

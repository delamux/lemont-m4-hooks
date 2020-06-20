import React from "react";
import { MyUserInfoContext } from "./user-context";

export const MyComponent = () => {
  const myContext = React.useContext(MyUserInfoContext);
  return (
    <>
      <h3>{myContext.username}</h3>
    </>
  );
};

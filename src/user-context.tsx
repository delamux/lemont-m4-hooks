import React from "react";

export interface UserContext {
  username: string;
  setUsername: (value: string) => void;
}

export const MyUserInfoContext = React.createContext<UserContext>({
  username: "",
  setUsername: (value) => {},
});

export const MyUserInfoContextProvider: React.FC = (props) => {
  const [username, setUsername] = React.useState("");

  return (
    <MyUserInfoContext.Provider value={{ username, setUsername }}>
      {props.children}
    </MyUserInfoContext.Provider>
  );
};
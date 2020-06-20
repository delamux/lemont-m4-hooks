import React from "react";
import { useWhyDidYouUpdate } from "./why-update";

interface Props {
  name: string;
  onChange: (value: string) => void;
}

const EditUsername: React.FC<Props> = React.memo((props) => {
  console.log(
    "Hey I'm only rerendered when name gets updated, check React.memo"
  );

  useWhyDidYouUpdate("EditUsername", props);

  return (
    <input
      value={props.name}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
});

interface UserInfo {
  name: string;
  lastname: string;
}

export const MyComponent = () => {
  const [userInfo, setInfo] = React.useState<UserInfo>({
    name: "John",
    lastname: "Doe",
  });

  /*  const setName = React.useCallback((name: string ) => {
    setInfo({
      ...userInfo,
      name,
    });
  }, []);

  const setLastName = React.useCallback((lastname: string ) => {
    setInfo({
      ...userInfo,
      lastname,
    });
  }, []); */

  const updateProp = (fieldName: keyof UserInfo) => (fieldValue) => {
    setInfo({
      ...userInfo,
      [fieldName]: fieldValue,
    });
  };

  return (
    <>
      <h3>
        {userInfo.name} {userInfo.lastname}
      </h3>
      <EditUsername name={userInfo.name} onChange={updateProp("name")} />
      <EditUsername name={userInfo.lastname} onChange={updateProp("lastname")} />
    </>
  );
};

import React from "react";
import { MyUserInfoContext } from "./user-context";

export const EditUser = () => {
  const [editingName, setEditingName] = React.useState("");
  const userContext = React.useContext(MyUserInfoContext);

  return (
    <>
      <input
        value={editingName}
        onChange={(e) => setEditingName(e.target.value)}
      />
      <button onClick={() => userContext.setUsername(editingName)}>
        login
      </button>
    </>
  );
};

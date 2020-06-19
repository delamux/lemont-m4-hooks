import React from "react";

export const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      {visible && <MyChildComponent />}
      <button onClick={() => setVisible(!visible)}>
        Toggle Child component visibility
      </button>
    </>
  );
};

const MyChildComponent = () => {
  const [userInfo, setUserInfo] = React.useState({
    name: "John",
    lastname: "Doe",
  });

  // cada vez q tecleo se imprime
  React.useEffect(() => {
    console.log("<<<<<<< Esto se ha cargado");

    // Función de limpieza On detroy de angular
    return () => console.log("el componente se ha desmontado >>>>>>>");
  }, []); // cuando se le pones los corches al final es para q se ejecute solo una vez

  return (
    <div>
      <h3>
        {userInfo.name} {userInfo.lastname}
      </h3>
      <input
        value={userInfo.name}
        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
      />
      <input
        value={userInfo.lastname}
        onChange={(e) => setUserInfo({ ...userInfo, lastname: e.target.value })}
      />
    </div>
  );
};

import React from "react";

const MyChildComponent = () => {
  React.useEffect(() => {
    console.log("<<<<<<< Esto se ha cargado");

    // Función de limpieza On detroy de angular
    return () => console.log("el componente se ha desmontado >>>>>>>");
  }, []);

  return <h4>Hello form child component</h4>;
};

export const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      {visible && <MyChildComponent />}
      <button onClick={() => setVisible(!visible)}>
        Toogle Child component
      </button>
    </>
  );
};

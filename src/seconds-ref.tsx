import React from "react";

export const MyComponent = () => {
  const [message, setMessage] = React.useState("initial message");
  const [seconds, setSeconds] = React.useState(0);
  const secondsRef = React.useRef(seconds);

  // Esto cambiaria en cuanto cambia el seconds y comentamos el seconds ref dentro del timeOut
  React.useEffect(() => {
    secondsRef.current = seconds;
  }, [seconds]);

  React.useEffect(() => {
    setTimeout(() => {
      console.log(seconds);
      setSeconds(1);
      // secondsRef.current = 1;
    }, 1000);

    setTimeout(() => {
      setMessage(
        `Total seconds: ${seconds} Seconds ref: ${secondsRef.current}`
      );
    }, 2000);
  }, []);

  return (
    <>
      <h3>{message}</h3>
      <h4>{seconds}</h4>
    </>
  );
};

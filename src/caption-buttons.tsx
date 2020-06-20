import React from "react";
import { ResetValue } from "./my-button-caption";

export const MyComponent = () => {
  const [username, setUsername] = React.useState("John");
  const [lastname, setLastname] = React.useState("Doe");

  const [captionReset, setCaptionReset] = React.useState("Reset Value");
  const [captionGamberro, setCaptionGamberro] = React.useState(
    "Haz el Gamberror"
  );

  const handleCaptionReset = (newValue: string) => {
    setCaptionReset(newValue);
  };

  const handleCaptionGamberro = (newValue: string) => {
    setCaptionGamberro(newValue);
  };

  const handleNameReset = () => {
    setUsername("");
  };

  const handleGamberro = () => {
    console.log("SOY UN GAMBERRO");
  };

  return (
    <>
      <h3>
        {username} {lastname}
      </h3>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <input value={lastname} onChange={(e) => setLastname(e.target.value)} />
      <ResetValue
        onChangeCaption={handleCaptionReset}
        caption={captionReset}
        onReset={handleNameReset}
      />
      <ResetValue
        onChangeCaption={handleCaptionGamberro}
        caption={captionGamberro}
        onReset={handleGamberro}
      />
    </>
  );
};

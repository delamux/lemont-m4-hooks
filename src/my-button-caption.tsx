import React from "react";

interface Props {
  onReset: () => void;
  caption: string;
  onChangeCaption: (newCaption: string) => void;
}

export const ResetValue: React.FC<Props> = React.memo(
  ({ onReset, caption, onChangeCaption }) => {
    console.log(
      "Hey I'm only rendered the first time, check React.memo + callback"
    );

    return (
      <div>
        <input
          value={caption}
          onChange={(e) => onChangeCaption(e.target.value)}
        />
        <button onClick={onReset}>{caption}</button>
      </div>
    );
  }
);
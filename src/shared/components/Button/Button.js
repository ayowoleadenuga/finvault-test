import React from "react";

export default function Button({ variant, text, buttonPill, type }) {
  return (
    <>
      {!buttonPill ? (
        <button className={`button-${variant}`}>{text}</button>
      ) : (
        <button className={`buttonPill ${type} round`}>{text}</button>
      )}
    </>
  );
}

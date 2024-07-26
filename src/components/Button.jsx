import React from "react";

export default function Button(props) {
  const { text, func } = props;
  return (
    <button
      onClick={func}
      className="duration-200 mx-auto px-8 py-4 rounded-md blueShadow bg-slate-950 border-2 border-blue-400 border-solid"
    >
      <p>{text}</p>
    </button>
  );
}

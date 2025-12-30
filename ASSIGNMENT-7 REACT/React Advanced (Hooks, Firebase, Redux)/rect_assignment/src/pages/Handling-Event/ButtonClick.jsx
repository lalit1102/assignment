import React, { useState } from "react";

const ButtonClick = () => {
  const [text, setText] = useState("Not Clicked");

  const handleClick = () => {
    setText("Clicked!");
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold mb-4">{text}</h2>

      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Click Me
      </button>
    </div>
  );
};

export default ButtonClick;

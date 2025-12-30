import React, { useState } from "react";

const LiveInput = () => {
  const [value, setValue] = useState("");

  return (
    <div className="p-6 text-center">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setValue(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 mb-4 w-64"
      />

      <h2 className="text-lg font-semibold">
        You typed: <span className="text-blue-600">{value}</span>
      </h2>
    </div>
  );
};

export default LiveInput;

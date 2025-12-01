import React, { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);
  console.log("here value is null"+inputRef)

  const handleFocus = (e) => {
    inputRef.current.focus();

  };
  console.log("here called to handleFouuse function"+handleFocus)

  return (
    <div>
      <input ref={inputRef} placeholder="Type something..." />
      <button onClick={handleFocus}>Focus input</button>
    </div>
  );
}
 export default MyComponent
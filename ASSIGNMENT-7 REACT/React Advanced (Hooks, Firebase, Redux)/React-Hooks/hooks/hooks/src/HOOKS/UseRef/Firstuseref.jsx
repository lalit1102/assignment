import React, { useRef } from 'react';

const Firstuseref = () => {
  const a = useRef(null);

  const onClickHandler = () => {
    a.current.value = "Baldaniya Lalit";
    a.current.focus();
  };

  return (
    <>
      <div>
        <button onClick={onClickHandler}>ACTION</button>
      </div>
      <label>
        Click on the action button to focus and populate the text.
      </label><br />
      <textarea ref={a} />
    </>
  );
};

export default Firstuseref;

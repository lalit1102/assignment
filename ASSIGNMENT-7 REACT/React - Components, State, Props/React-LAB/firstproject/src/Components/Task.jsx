import React from 'react';
// syntax :  function myFunction() {
  //  return 
// }
// here complited to two task simple way to created to function and use simple function and used curley braces some function
function Task() {
  // here created to one function welcomeStyle and giving some css
  const welcomeStyle = {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    color: '#61dafb',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px'
  };
// here created to some onether function to heading and created to some css
  const headingStyle = {
    color: '#ffffff',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
  };

  return (
    <>
    {/* // <> this is a fragment */}
    <div style={welcomeStyle}>
      <h1 style={headingStyle}>Welcome to React Assignment</h1>
      <p style={{ fontSize: '1.2rem', color: '#ffffff' }}>
        LALIT BALDANIYA
      </p>
    </div>
    </>
  );
}

export default Task;








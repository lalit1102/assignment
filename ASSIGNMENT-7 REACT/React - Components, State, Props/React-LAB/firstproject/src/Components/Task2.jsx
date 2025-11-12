import React from 'react'
// here complited to some props and take value of props and called and giving some internal css
function Task2 ({name,age,location}) {
  const Usercard = {
    display: 'flex',
    flexDirection: 'column',
    padding: '24px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    margin: '20px auto',
    border: '1px solid #eaeaea',
    transition: 'all 0.2s ease-in-out',
    gap: '20px'
  };

  const Contact = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    width: '100%'
  };

  const nameStyle = {
    fontSize: '28px',
    color: '#333',
    margin: '0',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%'
  };

  const info = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    width: '100%'
  };

  const infoStyle = {
    margin: '0',
    color: '#666',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#f8f9fa',
    padding: '12px 20px',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '280px',
    justifyContent: 'center'
  };

  return (
    <div style={Usercard}>
      <div style={Contact}>
        <h2 style={nameStyle}>{name}</h2>
        <div style={info}>
          <p style={infoStyle}>
            <span style={{ color: '#4a90e2' }}>●</span>
            Age: {age}
          </p>
          <p style={infoStyle}>
            <span style={{ color: '#4a90e2' }}>●</span>
            Location: {location}
          </p>
        </div>
      </div>
    </div>
  
  );
}

export default Task2;

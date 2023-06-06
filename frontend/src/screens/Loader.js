import React from 'react';
import loading from '../loading.gif';

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <img
        src={loading}
        alt="Loading..."
        style={{
          animation: 'spin 2s linear infinite',
          width: '50px',
          height: '50px',
        }}
      />
      <p>Fetching Menu</p>

      <style>
        {`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        `}
      </style>
    </div>
  );
};

export default Loader;

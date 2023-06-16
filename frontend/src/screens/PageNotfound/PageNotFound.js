import React from 'react';
import Page404 from '../images/404-page.jpg';
import './PageNotFound.css';
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleError = () => {
    navigate('/');
  }

  return (
    <div className="error-page">
      <img className="error-image" src={Page404} alt="Page Not Found" />
      <div className="error-message">
        The page you are looking for doesn't exist.
      </div>
      <button className="back-button" onClick={handleError}>
        Back to Homepage
      </button>
    </div>
  );
};

export default PageNotFound;

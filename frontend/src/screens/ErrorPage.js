import React from 'react';
import PageNotFound from './images/404-page.jpg';
import './ErrorPage.css';
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleError = () => {
    navigate('/');
  }

  return (
    <div className="error-page">
      <img className="error-image" src={PageNotFound} alt="Page Not Found" />
      <div className="error-message">
        The page you are looking for doesn't exist.
      </div>
      <button className="back-button" onClick={handleError}>
        Back to Homepage
      </button>
    </div>
  );
};

export default ErrorPage;

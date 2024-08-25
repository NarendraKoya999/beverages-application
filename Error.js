import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="error-page">
      <h1>No cocktail to display</h1> {/* Updated text */}
      <Link to="/" className="btn btn-primary">Back Home</Link>
    </section>
  );
};

export default Error;

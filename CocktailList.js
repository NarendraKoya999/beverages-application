import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm'; // Import SearchForm

const CocktailList = () => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        setCocktails(data.drinks || []);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch cocktails');
        setLoading(false);
      });
  }, [searchTerm]); // Refetch when searchTerm changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="section"> {/* Ensure section class is applied */}
      <SearchForm setSearchTerm={setSearchTerm} /> {/* Include SearchForm */}
      <div className="cocktails-center">
        {cocktails.length > 0 ? (
          cocktails.map(cocktail => (
            <div key={cocktail.idDrink} className="cocktail">
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              <div className="drink-info">
                <h2>{cocktail.strDrink}</h2>
                <h4>{cocktail.strCategory}</h4>
                <p>{cocktail.strInstructions.slice(0, 100)}...</p>
                <Link to={`/cocktail/${cocktail.idDrink}`} className="btn btn-primary btn-details"> {/* Added .btn-primary */}
                  Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="error-page">
            <h1>No cocktail to display</h1>
            <Link to="/" className="btn btn-primary">Back Home</Link> {/* Added .btn-primary */}
          </div>
        )}
      </div>
    </section>
  );
};

export default CocktailList;

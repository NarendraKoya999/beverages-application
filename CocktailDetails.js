import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const CocktailDetails = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        if (data.drinks === null) {
          setCocktail(null);
        } else {
          setCocktail(data.drinks[0]);
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch cocktail details');
        setLoading(false);
      }
    };

    fetchCocktail();
  }, [id]);

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <p>{error}</p>;

  if (!cocktail) {
    return (
      <section className="error-page"> {/* Added error page handling */}
        <h1>No cocktail to display</h1>
        <Link to="/" className="btn btn-primary">Back Home</Link> {/* Added .btn-primary */}
      </section>
    );
  }

  return (
    <section className="cocktail-section">
      <Link to="/" className="btn btn-primary">Back Home</Link> {/* Added .btn-primary */}
      <div className="drink">
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <div className="drink-info">
          <h2 className="section-title">{cocktail.strDrink}</h2>
          <p>{cocktail.strCategory}</p>
          <p>{cocktail.strInstructions}</p>
        </div>
      </div>
    </section>
  );
};

export default CocktailDetails;

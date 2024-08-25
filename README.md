# Beverages Application

## Overview

The Beverages Application is a React application that allows users to search for cocktails, view details of individual cocktails, and access information about the app. It uses React Router for navigation and handles API data fetching for cocktail information.

## Features

- **Home Page**: Displays a list of cocktails with a search feature.
- **Search Functionality**: Search for cocktails by name with a real-time search bar.
- **Cocktail Details**: View detailed information about a specific cocktail.
- **About Page**: Provides information about the app.
- **Error Handling**: Displays appropriate messages for errors and undefined routes.

## Components

1. **App**: Manages routing for the app.
   - Routes:
     - `/` - Home page showing a list of cocktails.
     - `/about` - About page with app information.
     - `/cocktail/:id` - Details page for a specific cocktail.
     - `*` - Error page for undefined routes.

2. **Navbar**: A navigation bar with links to the Home page and About page.

3. **About**: Displays information about the app.

4. **CocktailList**: Shows a list of cocktails with a search form.
   - Search for cocktails by name.
   - Click on a cocktail to view its details.

5. **CocktailDetails**: Shows detailed information about a selected cocktail.
   - Includes cocktail image, category, and instructions.

6. **SearchForm**: Allows users to input search terms for cocktails.
   - Triggers a search when the input length is at least 2 characters.

7. **Error**: Displays an error message when no cocktails are found or for undefined routes.


## Dependencies

- `react`
- `react-dom`
- `react-router-dom`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

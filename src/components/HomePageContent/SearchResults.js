import PropTypes from 'prop-types';
import React from 'react';
import './SearchResults.css';

function SearchResults({ searchResults }) {
    if (!searchResults || searchResults.length === 0) {
        return <p>No results found.</p>;
    }

    return (
        <div className="search_results_container">
            <h2 className="search_results_headline">Search Results...</h2>
            {searchResults.map((movie) => (
                <div key={movie.id} className="search_results_row">
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt={`Poster of ${movie.title}`}
                        className="lazyload"
                    />
                    <p className="search_results_title">{movie.title}</p>
                </div>
            ))}
        </div>
    );
}

SearchResults.propTypes = {
    searchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchResults;
import PropTypes from "prop-types";
import React from "react";
import "./Row.css";

function Row({ rowTitle, moviesArray, posterPath, setBackgroundImage }) {
    
    const handleMouseEnter = (imagePath) => {
        setBackgroundImage(`https://image.tmdb.org/t/p/original${imagePath}`);
    };
    const handleMouseLeave = () => {
        setBackgroundImage("");
    };

    return (
        <div className="row_container">
            <p className="row_container_title">{rowTitle}</p>
            <div className="movies_row_container">
                {moviesArray.map((value, key) => (
                    <div
                        className="movies_row"
                        key={key}
                        onMouseEnter={() => handleMouseEnter(posterPath ? value.poster_path : value.backdrop_path)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            src={posterPath ?
                                `https://image.tmdb.org/t/p/original${value.poster_path}`
                                : `https://image.tmdb.org/t/p/original${value.backdrop_path}`}
                            alt={value.title}
                            className="lazyload"
                            loading="lazy"
                            aria-label={`${value.title} poster`}
                        />
                        <p className="movie_title">{value.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

Row.propTypes = {
    rowTitle: PropTypes.string.isRequired,
    moviesArray: PropTypes.arrayOf(PropTypes.object).isRequired,
    posterPath: PropTypes.bool,
    setBackgroundImage: PropTypes.func.isRequired,
};

export default Row;
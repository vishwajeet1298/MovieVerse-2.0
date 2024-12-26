import React, { useEffect, useState } from 'react';
import "./HomePageContent.css";
import Row from './Row/Row';
import SearchResults from './SearchResults';

function HomePageContent({ searchQuery }) {
    const API_KEY = "1d655c4ccbc381a2086729ded33d7583";
    const BASE_URL = "https://api.themoviedb.org/3";

    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [backgroundImage, setBackgroundImage] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const topRatedMoviesApiUrl = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;
    const popularMoviesApiUrl = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
    const nowPlayingMoviesApiUrl = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`;
    const upcomingMoviesApiUrl = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`;
    const searchMoviesApiUrl = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`;

    function callApi(url, setVariable) {
        return fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => setVariable(data.results))
            .catch((err) => {
                console.log('Fetch error: ', err);
                setError(err.message);
            });
    }

    useEffect(() => {
        Promise.all([
            callApi(topRatedMoviesApiUrl, setTopRatedMovies),
            callApi(popularMoviesApiUrl, setPopularMovies),
            callApi(nowPlayingMoviesApiUrl, setNowPlayingMovies),
            callApi(upcomingMoviesApiUrl, setUpcomingMovies)
        ]).then(() => setLoading(false));
    }, [topRatedMoviesApiUrl,popularMoviesApiUrl,nowPlayingMoviesApiUrl,upcomingMoviesApiUrl]);

    useEffect(() => {
        if (searchQuery) {
            callApi(searchMoviesApiUrl, setSearchResults);
        }
        else {
            setSearchResults([]);
        }
    }, [searchQuery,searchMoviesApiUrl]);

    return (
        <div className="homepagecontent_container" style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none' }}>
            {loading ? <p>Loading...</p> : error ? <p>Error: {error}</p> : (
                <>
                    {searchQuery && searchResults.length > 0 ? (
                        <SearchResults searchResults={searchResults} setBackgroundImage={setBackgroundImage} />
                    ) : (
                        <>
                            {nowPlayingMovies.length > 0 && (
                                <Row
                                    rowTitle="Now Playing Movies"
                                    moviesArray={nowPlayingMovies}
                                    posterPath={true}
                                    setBackgroundImage={setBackgroundImage}
                                />
                            )}
                            {upcomingMovies.length > 0 && (
                                <Row
                                    rowTitle="Upcoming Movies"
                                    moviesArray={upcomingMovies}
                                    posterPath={true}
                                    setBackgroundImage={setBackgroundImage}
                                />
                            )}
                            {topRatedMovies.length > 0 && (
                                <Row
                                    rowTitle="Top Rated Movies"
                                    moviesArray={topRatedMovies}
                                    posterPath={true}
                                    setBackgroundImage={setBackgroundImage}
                                />
                            )}
                            {popularMovies.length > 0 && (
                                <Row
                                    rowTitle="Popular Movies"
                                    moviesArray={popularMovies}
                                    posterPath={true}
                                    setBackgroundImage={setBackgroundImage}
                                />
                            )}
                        </>
                    )}
                </>
            )}
            <div className={`animation_background ${!backgroundImage ? 'active' : ''}`}></div>
        </div>
    );
}

export default HomePageContent;
import { useState } from 'react';
import './Input.css';
import useFetch from './useFetch';


export const Input = () => {
    const [userInput, setUserInput] = useState('Paul');
    const {data : movies, loading, error} = useFetch('http://www.omdbapi.com/?s=' + userInput + '&apikey=44bc79c3');
    if(loading) return <h1>Loading ...</h1>
    if(error) return console.log(error);
    
    let newUserInput

    const updateInput = (event) => {
        setUserInput(newUserInput);
        event.preventDefault();
    }

    const handleChange = (event) => {
        newUserInput = event.target.value;
        console.log(movies)
    }
    
    const movieList = movies ? movies.map(movie =>
        <div className='movie-card'>
            <h2 className='movie-card-header'>{movie.Title}</h2>
            <p className='movie-card-date'>{movie.Year}</p>
            <img className='movie-card-poster' src={movie.Poster} alt='movie poster'></img>
        </div>
    ) : <p>No results to display - please search again!</p>

    return (
        <section>
            <form className='input-section'>
                <label>
                    <input className='input-textbox' type="text" name="movieSearch" defaultValue={userInput} onChange={handleChange}/>
                </label>
                <input className='submit-button' type="submit" name="Submit" onClick={updateInput}/>
            </form>
            <div className='movie-cards'>
                {userInput &&
                <h1 className='search-result-display'>Search Results for: {userInput}</h1>
                }
                {movieList}
            </div>
        </section>
    )
};

export default Input;
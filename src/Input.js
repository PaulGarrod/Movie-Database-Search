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
        <div>
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt='movie poster'></img>
        </div>
    ) : <p>Search Results Displayed Here!!</p>

    return (
        <section>
            <form className='input-section'>
                <label>
                    SEARCH: 
                    <input type="text" name="movieSearch" defaultValue={userInput} onChange={handleChange}/>
                </label>
                <input type="submit" name="Submit" onClick={updateInput}/>
                {console.log(userInput)}
            </form>
            <div className='header-section'>
                <div>
                    {movieList}
                </div>
            </div>
        </section>
    )
};

export default Input;
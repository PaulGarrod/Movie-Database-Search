import './Card.css';
import useFetch from './useFetch';

export const Card = () => {
    const {data : movies, loading, error} = useFetch("http://www.omdbapi.com/?s=batman&apikey=44bc79c3");
    if(loading) return <h1>Loading ...</h1>
    if(error) return console.log(error);
    return (
        <section className='header-section'>
            <h2>card here ! </h2>
        </section>
    )
};
export default Card;
import './CardSection.css';
import useFetch from './useFetch';

export const CardSection = () => {
    const{data, loading, error} = useFetch("http://www.omdbapi.com/?s=batman&apikey=44bc79c3");
    if(loading) return <h1>Loading ...</h1>
    if(error) return console.log(error);
    return (
        <section className='header-section'>
            {/* {console.log(data[1].Title)} */}
            <h2>Title: {data[1].Title}</h2>
            <h2>Released: {data[1].Year}</h2>
            <img src={data[1].Poster}></img>
        </section>
    )
};
export default CardSection;
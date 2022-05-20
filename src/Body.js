import Input from './Input';
import './Body.css';

export const Body = () => {
    return (
        <section className='body-section'>
            <h2 className='body-header'>Search your Favourite Movies</h2>
            <Input />
        </section>
    )
};

export default Body;
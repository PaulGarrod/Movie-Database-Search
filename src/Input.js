import './Input.css';

export const Input = () => {
    return (
        <form className='input-section'>
            <label>
                SEARCH: 
                <input type="text" name="Search" />
            </label>
        </form>
    )
};

export default Input;
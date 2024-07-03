import { FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ItemsList = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id} className='item'>
                    <input type="checkbox"
                        onChange={() => handleCheck(item.id)}
                        checked={item.checked}
                    />
                    <label
                        style={item.checked ? { textDecoration: "line-through" } : { textDecoration: "none" }}
                        onClick={() => handleCheck(item.id)}
                        id='label2'
                    >
                        {item.name}</label>

                    <input
                        style={
                            item.checked ? { textDecoration: "line-through", color: "red" } : { textDecoration: "none" }
                        }
                        id='description'
                        value={item.description ? item.description : 'No Description'}
                        type='text'
                        readOnly={true}
                    />
                    <FaTrashAlt
                        role="button"
                        tabIndex="0"
                        onClick={() => handleDelete(item.id)}
                    />
                </li>
            ))}
        </ul>
    );
};

ItemsList.propTypes = {
    items: PropTypes.array.isRequired,
    handleCheck: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};

ItemsList.defaultProps = {
    items: [],
    handleCheck: () => { },
    handleDelete: () => { }
};

export default ItemsList;
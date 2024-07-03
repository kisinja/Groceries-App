import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

const AddItem = ({ name, setName, handleSubmit, description, setDescription, checked, setChecked, err }) => {
    return (
        <form
            className='form'
            style={{ backgroundColor: "#f4f4f4", marginBottom: "20px", marginTop: "20px" }}
        >
            <h3 id='add-more'>Add More Items</h3>
            <div>
                <label
                    htmlFor="item"
                    id='label'
                >Name
                </label>
                <input
                    type="text"
                    placeholder="Item Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
            </div>
            <div>
                <label
                    htmlFor="description"
                    id='label'
                > Description
                </label>
                <input
                    type="text"
                    placeholder="Item Description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
            </div>

            <div
                style={{ display: "flex", width: '100%', justifyContent: 'space-between' }}
            >
                <label
                    htmlFor="check"
                    id='label'
                >
                    Completed
                </label>
                <input
                    type="checkbox"
                    name=""
                    id="item-check"
                    onChange={(e) => setChecked(e.target.value)}
                    checked={checked}
                />
            </div>

            {err && <div
                className='div-error'
            >
                <p
                    style={{ color: 'red' }}
                    id=''
                >Please fill in all the details
                </p>
            </div>}

            <div className='bg-red-300 w-full py-1 px-5'>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    style={{ width: "fit" }}
                    title="Add Item"
                >
                    <FaPlus />
                </button>
            </div>
        </form>
    );
};

AddItem.propTypes = {
    name: PropTypes.string.isRequired,
    setName: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired,
    setDescription: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
    setChecked: PropTypes.func.isRequired,
    err: PropTypes.string.isRequired
};

export default AddItem;
import { useState } from 'react';
import ItemsList from './ItemsList';
import PropTypes from 'prop-types';
import AddItem from './AddItem';

const Content = ({ items, handleCheck, handleDelete, setItems }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [checked, setChecked] = useState(false);
    const [err, setErr] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            setErr('Please fill in all fields');
            return;
        }

        const newItem = {
            id: items.length + 1,
            name,
            description,
            checked
        };
        setItems([...items, newItem]);
        setName('');
        setDescription('');
        setChecked(false);
        setErr('');

        localStorage.setItem('items', JSON.stringify([...items, newItem]));

        console.log(newItem);
    };


    return (
        <main>

            <div>
                <AddItem
                    handleSubmit={handleSubmit}
                    name={name}
                    setName={setName}
                    description={description}
                    setDescription={setDescription}
                    checked={checked}
                    setChecked={setChecked}
                    err={err}
                    setErr={setErr}
                />
            </div>

            {items.length > 0 ? (
                <ItemsList items={items} handleDelete={handleDelete} handleCheck={handleCheck} />
            ) : (
                <p
                    style={{ marginTop: "2rem" }}
                    id='error-p'
                >Your Grocery List is Empty !!!
                </p>
            )}
        </main>
    );
};

Content.propTypes = {
    items: PropTypes.array.isRequired,
    handleCheck: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    setItems: PropTypes.func.isRequired
};

Content.defaultProps = {
    items: [],
    handleCheck: () => { },
    handleDelete: () => { },
    setItems: () => { }
};

export default Content;
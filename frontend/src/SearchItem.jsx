import PropTypes from 'prop-types';

const SearchItem = ({ search, setSearch }) => {

    const inputStyles = {
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        position: "relative"
    }

    return (
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input
                type="text"
                id="search"
                role="searchbox"
                placeholder="Search ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={inputStyles}
            />
        </form>
    );
};

SearchItem.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired
};

export default SearchItem

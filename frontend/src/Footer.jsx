import PropTypes from 'prop-types';

const Footer = ({ items }) => {

    return (
        <footer>
            <p
                className="main-heading"
                style={{ fontSize: "18px" }}
            >
                {items.length > 0 ? `You have ${items.length} items in your list` : "No items in your list"}
            </p>
        </footer>
    );
};

Footer.propTypes = {
    items: PropTypes.array.isRequired
};

Footer.defaultProps = {
    items: []
};

export default Footer
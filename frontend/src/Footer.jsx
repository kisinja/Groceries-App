import PropTypes from 'prop-types';

const Footer = ({ items }) => {

    return (
        <footer>
            <p
                className="main-heading"
                style={{ fontSize: "18px" }}
            >
                You have {items.length} list items
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
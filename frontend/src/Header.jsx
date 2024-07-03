import DarkModeBtn from "./DarkModeBtn";
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <header>
            <h1 className="main-heading">{title}</h1>
            <DarkModeBtn />
        </header>
    )
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

Header.defaultProps = {
    title: "Groceries List"
};

export default Header;
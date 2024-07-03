import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "./slices/darkModeSlice";

const DarkModeBtn = () => {

    const toggleStyles = {
        backgroundColor: 'white',
        width: '80px',
        height: '40px',
        borderRadius: '30px',
        position: "relative",
        cursor: "pointer",
    }

    const darkMode = useSelector((state) => state.darkMode.darkMode);

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleDarkMode());
    }

    return (
        <div
            className="toggle"
            style={toggleStyles}
            onClick={handleClick}
        >
            <div
                className={`toggler ${darkMode ? "onDark" : "nonDark"}`}
                title={darkMode ? "Turn off Dark Mode" : "Turn on Dark Mode"}
            >
                {darkMode ? "🌜" : "🌞"}
            </div>
        </div>
    )
}

export default DarkModeBtn;
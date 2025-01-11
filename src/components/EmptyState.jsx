import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const EmptyState = ({ message, address, label }) => {
    return (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-116px)]">
            <p className="text-4xl font-semibold">{message}</p>
            <Link to={address} className="mt-5 relative px-5 py-3 overflow-hidden font-medium text-black bg-gray-100 border border-black rounded-lg shadow-inner group">
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">{label}</span>
            </Link>
        </div>
    );
};

EmptyState.propTypes = {
    message: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default EmptyState;
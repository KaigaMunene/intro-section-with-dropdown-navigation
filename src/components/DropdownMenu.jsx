// DropdownMenu.js
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function DropdownMenu({ items, onClick }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} className="p-1">
          <Link
            to={item.to}
            className="text-mediumGray hover:text-almostBlack block"
            onClick={onClick}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

DropdownMenu.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DropdownMenu;

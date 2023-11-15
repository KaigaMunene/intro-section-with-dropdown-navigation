import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import DropdownMenu from './DropdownMenu';

function CompanyDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative group">
      <button
        onClick={toggleDropdown}
        className="flex items-center text-mediumGray hover:text-almostBlack"
        type="button"
      >
        Company
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      {isOpen && (
        <div className="flex flex-col justify-between relative md:absolute px-4 text-xs font-light md:bg-white border rounded-lg shadow-2xl">
          <DropdownMenu
            items={[
              { to: '/history', label: 'History' },
              { to: '/team', label: 'Our Team' },
              { to: '/blog', label: 'Blog' },
            ]}
            onClick={closeDropdown}
          />
        </div>
      )}
    </div>
  );
}

export default CompanyDropdownMenu;

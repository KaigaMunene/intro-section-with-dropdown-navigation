import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { BsCalendarEvent, BsBellFill } from 'react-icons/bs';
import { LiaClipboardListSolid } from 'react-icons/lia';
import { TiTime } from 'react-icons/ti';

function FeaturesDropdownMenu() {
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
        Features
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      {isOpen && (
        <div className="flex flex-col justify-between relative md:absolute px-4 text-xs font-light md:bg-white md:border md:rounded-lg md:shadow-2xl">
          <Link
            to=""
            onClick={closeDropdown}
            className="py-2 hover:text-ebony hover:underline hover:font-bold flex"
          >
            <span className="text-purple-600 pr-2">
              <LiaClipboardListSolid />
            </span>
            Todo List{' '}
          </Link>
          <Link
            to=""
            onClick={closeDropdown}
            className="pb-2 hover:text-ebony hover:underline hover:font-bold flex"
          >
            <span className="text-cyan-400 pr-2">
              <BsCalendarEvent />
            </span>
            Calender{' '}
          </Link>
          <Link
            to=""
            onClick={closeDropdown}
            className="pb-2 hover:text-ebony hover:underline hover:font-bold flex"
          >
            <span className="text-yellow-400 pr-2">
              <BsBellFill />
            </span>
            Reminders{' '}
          </Link>
          <Link
            to=""
            onClick={closeDropdown}
            className="pb-2 hover:text-ebony hover:underline hover:font-bold flex"
          >
            <span className="text-purple-600 pr-2">
              <TiTime />
            </span>
            Planing{' '}
          </Link>
        </div>
      )}
    </div>
  );
}

export default FeaturesDropdownMenu;

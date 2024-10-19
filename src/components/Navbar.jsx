import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="w-full py-6 sm:px-12 px-6 flex justify-between items-center bg-black">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={24} height={32} /> {/* Increased size */}

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-6 text-base cursor-pointer text-pink hover:text-gray-700 transition-all" // Increased text size
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-9 max-sm:justify-end max-sm:flex-1"> {/* Increased gap */}
          <img src={searchImg} alt="search" width={24} height={24} /> {/* Increased size */}
          <img src={bagImg} alt="bag" width={24} height={24} /> {/* Increased size */}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

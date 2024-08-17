import { Link } from 'react-router-dom';
import MobileNav from './mobile-nav';
import MainNav from './main-nav';

function Header() {
  return (
    <nav className="border-b-2 border-b-orange-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-orange-500"
        >
          chowmart.com
        </Link>

        <div className="md:hidden">
          <MobileNav />
        </div>

        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </nav>
  );
}

export default Header;

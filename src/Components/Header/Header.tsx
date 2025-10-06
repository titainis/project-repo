import './Header.scss';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';

const Header = () => {
    return (
        <header className='header'>
          <div className="header__burger-menu">
            <BurgerMenu />
          </div>

          <nav className='header__links-container'>
            <a href="#">Movies</a>
            <a href="#">Favorites</a>
            <a href="#">Discover</a>
          </nav> 

          <div className='header__search-bar'>
            <SearchBar />
          </div>

          <div className="header__logo">
            <Logo />
          </div>
        </header>
    );
}

export default Header;

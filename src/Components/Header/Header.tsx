import './Header.scss';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
          <div className="header__burger-menu">
            <BurgerMenu />
          </div>

          <nav className='header__links-container'>
            <NavLink to='/movies' className='header__links'>Movies</NavLink>
            <NavLink to='/tv-series' className='header__links'>TV Series</NavLink>
            <NavLink to='/favorites' className='header__links'>Favorites</NavLink>
            <NavLink to='/account' className='header__links'>Account</NavLink>
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

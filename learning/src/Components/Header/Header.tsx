import './Header.scss';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const Header = () => {
    return (
        <header className='header'>
          <div className="header__burger-menu">
            <BurgerMenu />
          </div>

          <nav className='header__links-container'>
            <a href="#">Movies</a>
            <a href="#">Logo</a>
          </nav> 

          <div className="header__name">
            Moviezzz
          </div>
        </header>
    );
}

export default Header;

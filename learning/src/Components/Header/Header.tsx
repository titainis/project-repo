import './Header.scss';
import BurgerIcon from './icons/BurgerIcon/burgerIcon';

const Header = () => {
    return (
        <header className='header'>
          <div className="header__burger-menu">
            <BurgerIcon />
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

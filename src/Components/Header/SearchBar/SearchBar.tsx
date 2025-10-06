import Button from "../../Button/Button";
import './SearchBar.scss';

const SearchBar = () => {
  return (
    <div className="search">
      <form >
        <input className='search__input' name="Search" type="text" placeholder="Search" />
        <Button className="search__btn">
          <img className="search__icon"
            src="src/Components/Header/SearchBar/icon/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" 
            alt="Search" 
          />
        </Button>
      </form>
    </div>
  );
}

export default SearchBar;

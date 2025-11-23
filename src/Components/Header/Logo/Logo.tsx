import './Logo.scss'
import logo from '../../../assets/LogoImage/s8WrQs01.svg';

const Logo = () => {
  return (
    <div className="logo">
      <img 
        src={logo}
        alt="Logo" 
        className="logo__img"
      />
    </div>
  );
};

export default Logo;
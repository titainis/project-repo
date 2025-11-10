import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

interface SidebarProps {
  open: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  open
}) => {
    return (
    <div className={`sidebar ${open ? "sidebar__open" : ""}`}>
      <nav className='sidebar__links'>
        <NavLink to='/movies'>Movies</NavLink>
        <NavLink to='/tv-series'>TV Series</NavLink>
        <NavLink to='/favorites'>Favorites</NavLink>
        <NavLink to='/account'>Account</NavLink>
      </nav>
    </div>
    );
}

export default Sidebar;

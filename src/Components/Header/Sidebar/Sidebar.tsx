import { Link } from 'react-router-dom';
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
        <Link to='/movies'>Movies</Link>
        <a href="#">TV Series</a>
        <a href="#">Favorites</a>
        <a href="#">About</a>
        <a href="#">Contacts</a>
      </nav>
    </div>
    );
}

export default Sidebar;

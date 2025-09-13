import { Menu, X } from 'lucide-react';
import './BurgerMenu.scss';
import Button from '../../Button/Button';
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';

const BurgerIcon = () => {

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  }

    return (
        <div className='burger'>
          <Button 
            className='burger__btn'
            onClick={toggleMenu}
          >
           {open ? <X className='burger__icon'/> : <Menu className='burger__icon' />}
          </Button>

          {open && (
            <Sidebar open={open} />
          )}
        </div>
    )
}

export default BurgerIcon;

import { Menu } from 'lucide-react';
import './burgerIcon.scss';
import Button from '../../../Button/Button';

const BurgerIcon = () => {
    return (
        <div className='burger'>
          <Button 
            className='burger__btn'
          >
            <Menu className='burger__icon' />
          </Button>
        </div>
    )
}

export default BurgerIcon;

import './StartPage.scss';
import Header from '../../Components/Header/Header'
import Button from '../../Components/Button/Button';
import { Link } from 'react-router-dom';
import Background from '../../assets/StartPageImage/landing-bg-ww.webp';

const StartPage = () => {
    return (
      <>
      <Header />
        <div className="start-page d-flex justify-content-center align-items-center">
          <img src={Background} alt="FILMS" />
          <div className='start-page__explore'>
            <h1>Find Movies And TV Series To Watch</h1>
            <p>Get ready for the best experience</p>
              <div className='start-page__buttons'>
                <Link to='/movies'>
                  <Button>MOVIES</Button>
                </Link>

                <Link to='/tv-series'>
                  <Button>TV SERIES</Button>
                </Link>
            </div>
          </div>
        </div>       
      </>
    )
}

export default StartPage;

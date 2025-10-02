import './StartPage.scss';
import Header from '../../Components/Header/Header'
import Button from '../../Components/Button/Button';

const StartPage = () => {
    return (
      <>
      <Header />
        <div className="start-page d-flex justify-content-center align-items-center">
          <div className='start-page__explore'>
            <h1 className='pt-5'>Find trending movies for yourself</h1>
            <div>
            <Button
            >
              Explore
            </Button>
            </div>
          </div>
        </div>       
      </>
    )
}

export default StartPage;

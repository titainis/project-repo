import { Link } from "react-router-dom";
import AllMovies from "../../Components/AllMovies/AllMovies";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";

const AllMoviesPage = () => {
    return (
        <>
            <Header />
            <section className="d-flex flex-column height-100vh pt-60">
                <h2 className="text-center pt-2">All Movies</h2>
                <div className="all-movies__container ">
                    <AllMovies />
                </div>

                <div className="position-fixed bottom-0 pb-3 translate-middle-x start-50">
                <Link to="/movies">
                  <Button className="border-2 border-primary bg-black opacity-.5 text-white px-3 py-1 rounded-4">See Newest Movies</Button>
                </Link>
              </div>
            </section>
        </>
    )
}

export default AllMoviesPage;

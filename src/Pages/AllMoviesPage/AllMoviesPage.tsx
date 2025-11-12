import AllMovies from "../../Components/AllMovies/AllMovies";
import Header from "../../Components/Header/Header";


const AllMoviesPage = () => {
    return (
        <>
            <Header />

            <section className="d-flex flex-column height-100vh pt-60">
            <h2 className="text-center pt-2">All Movies</h2>
            <div className="all-movies__container ">
                <AllMovies />
            </div>
            </section>
        </>
    )
}

export default AllMoviesPage;

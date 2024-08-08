import { Route,Routes } from "react-router-dom";
import { MovieList } from '../pages/MovieList';
import { MovieDetail } from '../pages/MovieDetail';
import { Search } from '../pages/Search';
import { PageNotFound } from '../pages/PageNotFound';

export const AllRoutes = () =>{
    return(
        <>
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="movie/" element={<MovieDetail />} />
                <Route path="movies/" element={<MovieList />} />
                <Route path="movies/" element={<MovieList />} />
                <Route path="movies/" element={<MovieList />} />
                <Route path="search" element={<Search />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}

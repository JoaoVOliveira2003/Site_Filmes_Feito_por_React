import { Route,Routes } from "react-router-dom";
import { MovieList,MovieDetail,Search,PageNotFound } from "../pages";

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
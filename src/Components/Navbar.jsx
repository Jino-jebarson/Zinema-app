import { Route, Routes } from "react-router-dom"
import UpcomingMovies from "./Movies"
import Home from "./home";
import TopNav from './route'
import Footer from "./footer";
import Booking from "./bookingpage";
import TopRated from "./theatres";
import Popular from "./news";
import SeatSelection from "./seatselection";
import LoginForm from "./formvalidation";
function Navbar() {
    return (
        <>
            <TopNav />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/upcomingmovies" element={<UpcomingMovies />} ></Route>
                <Route path='/theatres' element={<TopRated />}></Route>
                <Route path="/news" element={<Popular />}></Route>
                <Route path='/booking' element={<Booking />}></Route>
                <Route path='/seatselection' element={<SeatSelection />}></Route>
                <Route path="/login" element={<LoginForm />}></Route>
            </Routes>
            <Footer />
        </>
    )
}
export default Navbar;
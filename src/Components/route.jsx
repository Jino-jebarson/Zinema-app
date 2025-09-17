import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Route() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    function handleExit() {
        if (window.confirm("Are you sure you want to exit the page?")) {
            window.location.href = "https://www.google.com";
        }
    }

    function handleForm() {
        navigate("/login");
    }

    // Navigate to home with search state whenever user types
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        navigate("/", { state: { search: value } });
    };

    return (
        <div className="navbar navbar-expand-md my-2">
            <div className="container-xl">
                <Link to="/" className="navbar-brand">Zinema</Link>
                <button
                    type="button"
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#links"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="links" className="collapse navbar-collapse justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/upcomingmovies" className="nav-link">Movies</Link></li>
                        <li className="nav-item"><Link to="/theatres" className="nav-link">Top Rated</Link></li>
                        <li className="nav-item"><Link to="/news" className="nav-link">Popular</Link></li>
                    </ul>

                    {/* Search input */}
                    <div className="input-group justify-content-center mx-md-5 mx-sm-0">
                        <span className="input-group-text bg-white border-1 border-info">
                            <i className="bi bi-search"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control border-1 border-info"
                            placeholder="Search..."
                            value={search}
                            onChange={handleSearchChange}
                        />
                    </div>

                    <div className="mt-sm-3 mt-md-0 mx-sm-1 d-md-flex justify-content-evenly">
                        <button className="btn btn-outline-info" onClick={handleForm}>
                            <i className="bi bi-person-circle"></i>
                        </button>
                        <button className="btn btn-outline-info mx-2" onClick={handleExit}>
                            <i className="bi bi-box-arrow-right me-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Route;

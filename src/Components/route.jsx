import { Link, useNavigate } from "react-router-dom";

function Route() {
    const navigate = useNavigate();
    function handleExit(){
        alert('are you sure to exit the page')
    window.location.href = 'https://www.google.com';
}
function handleForm(){
    navigate('/login')
}
    return (
        <>
            <div className="navbar navbar-expand-md my-2" >
                <div className='container -xl' >
                    <a href="" className='navbar-brand'>Zinema</a>
                    <button type="button" className="navbar-toggler" data-bs-target="#links" data-bs-toggle='collapse'>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id='links' className="collapse navbar-collapse justify-content-center">
                        <ul className='navbar-nav'>
                            <li className="nav-item"><Link to='/' className="nav-link text-decoration-none">home</Link></li>
                            <li className="nav-item"><Link to="/upcomingmovies" className="nav-link text-decoration-none">movies</Link></li>
                            <li className="nav-item"><Link to='/theatres' className="nav-link text-decoration-none">topRated</Link></li>
                            <li className="nav-item"><Link to="/news" className="nav-link text-decoration-none">popular</Link></li>
                        </ul>
                        <div className="input-group justify-content-center mx-md-5 mx-sm-0">
                            <span className="input-group-text bg-white border-1 border-info">
                                <i className="bi bi-search"></i>
                            </span>
                            <input type="text" className="form-control border-1 border-info" placeholder="Search..."
                            />
                        </div>
                        <div className=" mt-sm-3 mt-md-0 mx-sm-1 d-md-flex  justify-content-evenly  ">
                            <button className="mt-3 mt-md-0 btn btn-outline-info"> <i className="bi bi-person-circle " onClick={handleForm}></i></button>
                            <button className="mt-3 mt-md-0 btn btn-outline-info mx-2" onClick={handleExit}><i className="bi bi-box-arrow-right me-2 mx-3" ></i></button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Route;

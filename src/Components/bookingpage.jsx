import { useLocation, useNavigate } from 'react-router-dom';
function Booking() {
    const { state } = useLocation();
    const movie = state?.movie;

    if (!movie) {
        return <div>No movie data found</div>;
    }

    return (
        <>
            <div className=' container justify-content-center '>
                <div className='justify-content-center mt-5' >
                    <h3 className='text-dark'>Movie Name: <span className='text-info'>{movie.title || movie.original_title}</span></h3>
                    <img className='rounded'
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                        style={{ width: '100%', maxWidth: '500px' }}
                    />
                    <div className="movie-details">
                        <p className='mt-3'>Release Date: {movie.release_date}</p>
                        <div className='bg-light p-2 text-primary rounded'>
                            <p className=''><span className='text-dark fw-bold'>Storyline:</span> {movie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
            <ShowTime />
        </>
    );
}
function ShowTime() {
    const navigate = useNavigate();
    let show = [{

        show1: '11:00 A.M',
        show2: '12:30 A.M.',
        show3: '4:00 P.M.',
        show4: '10:30 P.M.',
        show5: '5:20 P.M.',
        show6: '9:20 P.M.',
    }]
    let theatres = [{
        theatre1: 'AGS cinemas',
        theatre2: 'INOX movies',
        theatre3: 'PVR cinemas',
        theatre4: 'IMAX movies',
        theatre5: 'EGA cinemas'
    }]
    let theatreName = theatres.map((theatre) => {
        return (
            <>
                <p className='fw-bold text-primary'>{theatre.theatre1}</p>
            </>
        )
    })
    let theatreName2 = theatres.map((theatre) => {
        return (
            <>
                <p className='fw-bold text-primary'>{theatre.theatre2}</p>
            </>
        )
    })
    let theatreName3 = theatres.map((theatre) => {
        return (
            <>
                <p className='fw-bold text-primary'>{theatre.theatre3}</p>
            </>
        )
    })
     let theatreName4 = theatres.map((theatre) => {
        return (
            <>
                <p className='fw-bold text-primary'>{theatre.theatre4}</p>
            </>
        )
    })
     let theatreName5 = theatres.map((theatre) => {
        return (
            <>
                <p className='fw-bold text-primary'>{theatre.theatre5}</p>
            </>
        )
    })
   function handleBook(){
    navigate('/seatselection');
   }        
    
    let time = show.map((times) => {
        return (
            <>
                <div className='container mt-5'>
                    <h2 clas>Shows</h2>
                    <div className="container  bg-light p-3 rounded">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-auto mb-2 mb-md-0">
                                <strong>{theatreName}</strong>
                            </div>
                            <div className="col d-flex flex-wrap">
                                <button className="btn btn-outline-success me-2 mb-2"onClick={handleBook}>{times.show1}</button>
                                <button className="btn btn-outline-success me-2 mb-2" onClick={handleBook}>{times.show2}</button>
                                <button className="btn btn-outline-success me-2 mb-2" onClick={handleBook}>{times.show4}</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="container mt-3 bg-light p-3 rounded">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-auto mb-2 mb-md-0">
                                    <strong>{theatreName2}</strong>
                                </div>
                                <div className="col d-flex flex-wrap">
                                    <button className="btn btn-outline-success me-2 mb-2" onClick={handleBook}>{times.show1}</button>
                                    <button className="btn btn-outline-success me-2 mb-2" onClick={handleBook}>{times.show2}</button>
                                   

                                </div>
                            </div>
                        </div>
                        <div className="container mt-3 bg-light p-3 rounded">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-auto mb-2 mb-md-0">
                                    <strong>{theatreName3}</strong>
                                </div>
                                <div className="col d-flex flex-wrap">
                                    <button className="btn btn-outline-success me-2 mb-2" onClick={handleBook}>{times.show1}</button>
                                    <button className="btn btn-outline-success me-2 mb-2" onClick={handleBook}>{times.show2}</button>
                                    <button className="btn btn-outline-success me-2 mb-2" onClick={handleBook}>{times.show3}</button>
                                    <button className="btn btn-outline-success me-2 mb-2" onClick={handleBook}>{times.show4}</button>
                                   
                                </div>
                            </div>
                        </div>
                         <div className="container mt-3 bg-light p-3 rounded">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-auto mb-2 mb-md-0">
                                    <strong>{theatreName4}</strong>
                                </div>
                                <div className="col d-flex flex-wrap">
                                    <button className="btn btn-outline-success me-2 mb-2"onClick={handleBook}>{times.show1}</button>
                                    <button className="btn btn-outline-success me-2 mb-2" onClick={handleBook}>{times.show3}</button>
                                    <button className="btn btn-outline-success me-2 mb-2" onClick={handleBook}>{times.show5}</button>
                                    <button className="btn btn-outline-success me-2 mb-2" onClick={handleBook}>{times.show6}</button>
                                </div>
                            </div>
                        </div>
                         <div className="container mt-3 bg-light p-3 rounded">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-auto mb-2 mb-md-0">
                                    <strong>{theatreName5}</strong>
                                </div>
                                <div className="col d-flex flex-wrap">
                                    <button className="btn btn-outline-success me-2 mb-2" onClick={handleBook}>{times.show1}</button>
                                    <button className="btn btn-outline-success me-2 mb-2" onClick={handleBook}>{times.show5}</button>
                                    <button className="btn btn-outline-success me-2 mb-2" onClick={handleBook}>{times.show6}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    })
    return (
        <>
            {time}
        </>
    )
}



export default Booking;
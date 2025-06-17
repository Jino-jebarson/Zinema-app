import { useState } from "react"
import { useEffect } from "react"
function UpcomingMovies() {
    const [img, Setimg] = useState([])
    const [visibleOverview, setVisibleOverview] = useState(null);
    useEffect(() => {
        let apiUrl =
            'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZhZjFkYWQwODUxODEzMmQ1Y2I5NTkxMzhmNjgwZiIsIm5iZiI6MTc1MDA1OTUzNC4xOTEsInN1YiI6IjY4NGZjYTBlMjQzNzBhNWJmYjNmYzRkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q8Iiamue4DmCI2EoHrEJSTzs9nLL8KAT12ePRU2zN-Q'

            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                Setimg(data.results.slice(0, 9))
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])

    return (
        <>
            <div className='my-5 container'>
                <div className='d-flex flex-wrap justify-content-center' >
                    {img.map((movie) => {
                        return (
                            <>
                                <div className="bg-light m-3 rounded p-1" id="cards">
                                    <img className='m-2 text-center' key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.name} style={{ width: '300px', borderRadius: '10px' }} />
                                    <p className='d-block mt-2 mx-2 text-info'>{movie.name || movie.original_title}</p>
                                    <p className='mx-2 text-secondary'>{`Releasing on: ${movie.release_date}`}</p>
                                    <button className='btn btn-outline-primary mx-2 mb-2' onClick={() => setVisibleOverview(movie.id)}>overview</button>
                                    {visibleOverview === movie.id && (
                                        <div className='bg-info p-1 rounded overview-box mx-2 mb-2'><p className="text-light">{movie.overview}</p>  
                                      </div>
                                    )}

                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )

}
export default UpcomingMovies;
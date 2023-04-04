import { useEffect, useState } from 'react';
import { Movie } from './Movies/Movies';

function MovieList() {
  const [movieData, setmovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const rsp = await fetch('https://localhost:4000/Movies');
      const temp = await rsp.json();
      setmovieData(temp);
    };
    getMovies();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-center">Joel Hilton's Movie Collection</h1>
      </div>
      <div>
        <table className="table table-bordered table-striped">
          <thead className="text-center">
            <tr>
              <th>Category</th>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Edited</th>
              <th>LentTo</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {movieData.map((movie) => (
              <tr key={movie.MovieId}>
                <td>{movie.Category}</td>
                <td>{movie.Title}</td>
                <td>{movie.Year}</td>
                <td>{movie.Director}</td>
                <td>{movie.Rating}</td>
                <td>{movie.Edited}</td>
                <td>{movie.LentTo}</td>
                <td>{movie.Notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;

import { useEffect, useState } from 'react';
import { Movie } from './Movies/Movies';

function MovieList() {
  const [movieData, setmovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const rsp = await fetch('https://localhost:4000/Movie');
      const temp = await rsp.json();
      console.log(temp);
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
              <tr key={movie.movieId}>
                <td>{movie.category}</td>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.director}</td>
                <td>{movie.rating}</td>
                <td>{movie.edited}</td>
                <td>{movie.lentTo}</td>
                <td>{movie.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;

import data from './MovieData.json';
const Movies = data.MovieData;

function MovieList() {
  return (
    <>
      <div>
        <h1 className="text-center">Joel Hilton's Movie Collection</h1>
      </div>
      <div>
        <table className="table table-bordered table-striped">
          <thead className="text-center">
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {Movies.map((movie) => (
              <tr>
                <td>{movie.Title}</td>
                <td>{movie.Year}</td>
                <td>{movie.Director}</td>
                <td>{movie.Rating}</td>
                <td>{movie.Category}</td>
                <td>{movie.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;

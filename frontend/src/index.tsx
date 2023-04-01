import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopBanner from './Home';
import Layout from './Layout';
import Link from './Podcasts';
import MovieList from './MovieCollection';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './LandingPage';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/" element={<Layout />}>
            <Route path="Home" element={<TopBanner />} />
            <Route path="Podcasts" element={<Link />} />
            <Route path="MovieCollection" element={<MovieList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

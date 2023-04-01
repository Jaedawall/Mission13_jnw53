import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import TopBanner from './Home';
import Link from './Podcasts';
import Collection from './MovieCollection';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Home" element={<TopBanner />} />
          <Route path="Podcasts" element={<Link />} />
          <Route path="MovieCollection" element={<Collection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

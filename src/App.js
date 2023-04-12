import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js'
import Movies from './pages/Movies.js'
import TvSeries from './pages/TvSeries.js'
import Bookmarked from './pages/Bookmarked.js'
import './scss/scss-style.js'
import Layout from './pages/Layout.js';
function App() {

  return (
    <div className="app">
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/tvSeries' element={<TvSeries/>}/>
            <Route path='/bookmarked' element={<Bookmarked/>}/>
            <Route path='*' element={<h1>PAGE NOT FOUND</h1>}/>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js'
import Movies from './pages/Movies.js'
import TvSeries from './pages/TvSeries.js'
import Bookmarked from './pages/Bookmarked.js'
import './scss/scss-style.js'
import Layout from './pages/Layout.js';
import { QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query';

export const useData = () => useQuery(["data"], () => {
  return fetch('http://localhost:8000/data')
  .then((response) => response.json())
})

function App() {
  const client = new QueryClient()
  return (
    <div className="app">
      <QueryClientProvider client={client}>
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
      </QueryClientProvider>
    </div>
  );
}

export default App;

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
//pages
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import { About } from "./pages/About";
import { Articles } from "./pages/Articles";
import { ArticlesListe } from "./pages/ArticlesListe";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className=" max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/about' element={ <About />} />
          <Route path='/articles/:name' element={ <Articles />} />
          <Route path='/articles-Liste' element={ <ArticlesListe />} />
          <Route path='*' element={ <Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";




export default function App() {
    return (
        <BrowserRouter>
         <div className="App">
            <Header />
            <Nav />

            <div className='Main Body'>
            <Routes>
                <Route path="/" element={<Articles />} />
                <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
            </Routes>




            </div>
         </div>
        </BrowserRouter>
    )
}
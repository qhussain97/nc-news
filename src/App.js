import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Articles from "./components/Articles";



export default function App() {
    return (
        <BrowserRouter>
         <div className="App">
            <Header />
            <Nav />
            <Routes>
                <Route path="/" element={<Articles />} />
                
            </Routes>
         </div>
        </BrowserRouter>
    )
}
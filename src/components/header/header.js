import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import axiosInstance from "../../axios/axiosInstance";
import Card from "../card/card";
import "./header.css";
const Header = () => {
  const [inputSearch, setInputSearch] = useState({ search: "" });
  const [searchReasult, setSearchResult] = useState([]);
  const [expand, setExpand] = useState(true);

  const toggleMenu=()=>{
    setExpand((prev)=>!prev);
  }

  const handleChanges = (e) => {
    setInputSearch({ search: e.target.value });
    axiosInstance
      .get(`/search/movie?query=${inputSearch.search}`)
      .then((res) => {
        console.log(res);
        setSearchResult(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Navbar bg="dark" onToggle={toggleMenu} expanded={expand} expand='lg'>
        <Container>
          <Navbar.Brand href="#home" className="navbrand">
            Movie-App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="mx-3 link" to="/" onClick={()=>{toggleMenu()}}>
                Home
              </Link>
              <Link className="mx-3 link" to="/movies" onClick={()=>{toggleMenu()}}>
                Movies
              </Link>
              <Link className="mx-3 link" to="/favorite" onClick={()=>{toggleMenu()}}>
                Favorites
              </Link>
              <input
                type="text"
                value={inputSearch.search}
                onChange={(event) => {
                  handleChanges(event);
                }}
                placeholder="search"
                className='"border border-light col-xl-9'
              />
              <Link className="mx-3 link" to="/login" onClick={()=>{toggleMenu()}}>
                Login
              </Link>
              <Link className="mx-3 link" to="/register" onClick={()=>{toggleMenu()}}>
                Register
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container">
        <div className="row">
          {searchReasult.map((result, index) => {
            return (
              <div className="col-12 col-md-6 col-xl-3  wrapper" key={index}>
                <Link to={`/details/${result.id}`} className="link">
                <Card src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} title={result.title} vote={result.vote_average}/>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Header;

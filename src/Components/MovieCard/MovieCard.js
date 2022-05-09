import React, { useState, useEffect } from "react";
import CardData from "../Card/CardData";
import axios from "axios";
import { Form, FormControl, Button, Navbar } from "react-bootstrap";
import "../../Components/MovieCard/MovieCard.css";

function MovieCard() {
  const image = "https://i.ytimg.com/vi/g13gs5a8HZ4/hqdefault.jpg"
  const [data, setData] = useState([]);
  const [searchdata, setSearchData] = useState("");

  const getApi = async (name) => {
    const result = await axios.get(
      `http://www.omdbapi.com/?apikey=2b886107&s=${name}&y=${new Date().getFullYear()}`,
      {}
    );
    setData(result.data.Search);
    console.log(result.data.Search);
  };
  useEffect(() => {
    getApi("batman");
  }, []);
  const submitHandler = () => {
    if (searchdata === "") {
      return;
    }
    getApi(searchdata);
  };
  return (
    <div className="MainContainer">
      <Navbar className="Navbar">
        <h1 className="heading">MOVIE SEARCH APPLICATION</h1>
        <Form className="form">
          <FormControl
            type="search"
            placeholder="Search Movie here...."
            className="me-2"
            aria-label="Search"
            onChange={(event) => {
              setSearchData(event.target.value);
            }}
          />
          <Button
            variant="outline-success"
            onClick={submitHandler}
            className="btn"
          >
            Search
          </Button>
        </Form>
      </Navbar>

      <div className="data">
        {data ? (
          data.map((item) => {
            return <CardData data={item} />;
          })
        ) : (
          <img src={image} alt="" className="NFMovie"/>
        )}
      </div>
    </div>
  );
}

export default MovieCard;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Navbar, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../Components/MoreDetails/MoreDetails.css";

function MoreDetails() {
  const params = useParams();
  const [data, setData] = useState({});
  const getMovieDetails = async (Id) => {
    const result = await axios.get(
      `http://www.omdbapi.com/?apikey=2b886107&i=${Id}`,
      {}
    );
    setData(result.data);
    console.log("result.data", result.data);
  };
  useEffect(() => {
    getMovieDetails(params.id);
  }, []);
  console.log("dataPoster", data.Poster);
  console.log("dataActor", data.Actor);

  const getRatting = (value, type) => {
    let actlVal;
    if (type === "PERCENTAGE") {
      actlVal = value.split("%");
      actlVal = parseInt(actlVal[0]) / 2;
      actlVal = Math.round(actlVal);
    } else if (type === "OF10") {
      actlVal = value.split("/");
      actlVal = parseInt(actlVal[0]) / 2;
      actlVal = actlVal / 10;
      actlVal = Math.round(actlVal);
    } else if (type === "OF100") {
      actlVal = value.split("/");
      actlVal = parseInt(actlVal[0]) / 2;
      actlVal = actlVal / 10;
      actlVal = Math.round(actlVal);
    }
    const stars = [];
    for (let index = 1; index < 6; index++) {
      if (actlVal >= index) {
        stars.push(<div className="star-active"></div>);
      } else {
        stars.push(<div className="star-disabled"></div>);
      }
    }
    return stars;
  };

  return (
    <div className="Container">
      <Navbar className="Navbar">
        <Button variant="outline-success">
          <Link to="/" className="homebtn">
            Back to Home
          </Link>
        </Button>
        <h1 className="details">MOVIE DETAILS</h1>
      </Navbar>
      <div className="topcontent">
        <h1 className="title">{data.Title}</h1>
        <h5>
          {data.Ratings && data.Ratings.length > 0 && data.Ratings[0] && (
            <div className="Ratingcontent">
              <div>Ratings:{data.Ratings[0].Source}</div>
              {getRatting(data.Ratings[0].Value, "PERCENTAGE")}
              <span className="span">{data.Ratings[0].Value}</span>
            </div>
          )}
          {data.Ratings && data.Ratings.length > 0 && data.Ratings[1] && (
            <div className="Ratingcontent">
              <div>Ratings:{data.Ratings[1].Source}</div>
              {getRatting(data.Ratings[1].Value, "OF10")}
              <span className="span">{data.Ratings[1].Value}</span>
            </div>
          )}
          {data.Ratings && data.Ratings.length > 0 && data.Ratings[2] && (
            <div className="Ratingcontent">
              <div>Ratings:{data.Ratings[2].Source}</div>
              {getRatting(data.Ratings[2].Value, "OF100")}
              <span className="span">{data.Ratings[2].Value}</span>
            </div>
          )}
        </h5>
      </div>
      <Container className="detalisdata">
        <Row>
          <Col xs={4}>
            <img src={data.Poster} alt="" className="posterimage" />
          </Col>
          <Col xs={8} className="content">
            <h6>Title of the Movie: {data.Title} </h6>
            <h6>Summary: {data.Plot}</h6>
            <h6>Actors: {data.Actors}</h6>
            <h6>Type: {data.Type}</h6>
            <h6>Website: {data.Website}</h6>
            <h6>Writer: {data.Writer}</h6>
            <h6>Year: {data.Year}</h6>
            <h6>Released: {data.Released}</h6>
            <h6>Runtime: {data.Runtime}</h6>
            <h6>imdbRating: {data.imdbRating}</h6>
            <h6>Awards: {data.Awards}</h6>
            <h6>BoxOffice: {data.BoxOffice}</h6>
            <h6>Country: {data.Country}</h6>
            <h6>DVD: {data.DVD}</h6>
            <h6>Genre: {data.Genre}</h6>
            <h6>Language: {data.Language}</h6>
            <h6>Metascore: {data.Metascore}</h6>
            <h6>Production: {data.Production}</h6>
            <h6>Rated: {data.Rated}</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MoreDetails;

import React, { useEffect, useState } from "react";
import "../../Components/Footer/Footer.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function Footer() {
  const [data, setData] = useState([]);
  const getApi = async (name) => {
    const result = await axios.get(
      `http://www.omdbapi.com/?apikey=2b886107&s=${name}`,
      {}
    );
    var value = result.data.Search;
    value.pop();
    value.pop();
    value.pop();
    value.pop();
    value.pop();
    setData(value);
  };
  useEffect(() => {
    getApi("2022");
  }, []);
  return (
    <div className="FooterMain">
      <h1 className="details">RELATED MOVIES DISPLAY HERE</h1>
      <div className="Footer">
        {data.map((item) => {
          return (
            <>
              <Card className="card">
                <Card.Img
                  className="cardimage"
                  variant="top"
                  src={
                    item.Poster !== "N/A"
                      ? item.Poster
                      : "https://bitsofco.de/content/images/2018/12/broken-1.png"
                  }
                />
                <Card.Body className="cardbody">
                  <Card.Title className="cardtitle">{item.Title}</Card.Title>
                  <h5>{item.Year}</h5>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;

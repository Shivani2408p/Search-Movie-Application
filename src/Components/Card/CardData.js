import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../Components/Card/CardData.css";

function CardData({ data }) {
  return (
    <div>
      <div>
        <Card className="card">
          <Card.Img
            className="cardimage"
            variant="top"
            src={
              data.Poster !== "N/A"
                ? data.Poster
                : "https://bitsofco.de/content/images/2018/12/broken-1.png"
            }
          />
          <Card.Body>
            <Card.Title className="cardtitle">{data.Title}</Card.Title>
            <Button variant="outline-success">
              <Link to={`/moredetails/${data.imdbID}`} className="moredetails">
                More Details.......
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CardData;

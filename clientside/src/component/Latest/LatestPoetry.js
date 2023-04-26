import React from "react";
import "./LatestPoetry.css";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

function LatestPoetry() {
  const userdata = useSelector((state) => state.auth);
  console.log(
    "🚀 ~ file: LatestPoetry.js:7 ~ LatestPoetry ~ userdata:",
    userdata
  );
  const poetry = userdata.data.result.poetry;

  return (
    <>
      <div className="latestpoetry--page">
        <h3 style={{ color: "white", padding: "1rem" }}>
          Recently Added Poetry
        </h3>
        <div className="row d-flex justify-content-center align-items-center">
        {poetry.map((poem) => (
          <Card
            className="card_style mx-2  "
          >
            {/* <Card.Body> */}
              <div className="card" key={poem.id}>
                <Card.Text>{poem.title}</Card.Text>
                <Card.Text>{poem.content}</Card.Text>
                <Card.Text>{poem.author}</Card.Text>
                <Card.Text>{poem.genre}</Card.Text>
              </div>
            {/* </Card.Body> */}
          </Card>
        ))}
        </div>
      </div>
    </>
  );
}

export default LatestPoetry;

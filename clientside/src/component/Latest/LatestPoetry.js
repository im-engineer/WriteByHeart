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
        <h3 style={{ color: "white", float: "left", padding: "1rem" }}>
          Recently Added Poetry
        </h3>
        <div className="row d-flex justify-content-center align-items-center">
        {poetry.map((poem) => (
          <Card
            style={{
              width: "50%",
              border: "none",
              marginBottom: "2rem",
              height: "10rem",
            }}
            className="card_style mx-2 mt-4 "
          >
            {/* <Card.Body> */}
              <div className="card" key={poem.id}>
                <Card.Title>{poem.title}</Card.Title>
                <Card.Title>{poem.content}</Card.Title>
                {/* Render other details of the poem as needed */}
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

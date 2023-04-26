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
        <Card >
          <Card.Body>
          {poetry.map((poem) => (
            <div className="card" key={poem.id}>
              <Card.Title>{poem.title}</Card.Title>
              <Card.Title>{poem.content}</Card.Title>
              {/* Render other details of the poem as needed */}
            </div>
          ))}
          </Card.Body>
          </Card>
      </div>
    </>
  );
}

export default LatestPoetry;

import React, { useState, useEffect } from "react";
import "./LatestPoetry.css";
import { Card } from "react-bootstrap";
import { getAllPoetry } from "../../service/authService";
import img from "../../assets/jpeg/logo.png";

function LatestPoetry() {
  const [poetry, setPoetry] = useState([]);

  useEffect(() => {
    const fetchPoetry = async () => {
      try {
        const result = await getAllPoetry();
        const allPoetry = result.data;
        console.log("All Poetry:", allPoetry);
        setPoetry(allPoetry);
      } catch (error) {
        console.error("Error fetching poetry:", error);
      }
    };

    fetchPoetry();
  }, []);

  return (
    <div className="latestpoetry--page">
      <h3 style={{ color: "white", padding: "1rem" }}>Recently Added Poetry</h3>
      <div className="row d-flex justify-content-center align-items-center">
        {poetry.length === 0 ? (
          <p style={{ color: "white" }}>No poetry data available</p>
        ) : (
          poetry.map((poem) => {
            let path = `http://localhost:5001/upload/${poem.image}`;
            console.log("Image Path:", path);
            return (
              <Card className="mx-2" key={poem.id}>
                <Card.Img
                  variant="top"
                  src={path}
                  style={{ height: "25rem", marginTop: "1rem" }}
                  onError={(e) => {
                    console.error("Image failed to load:", e);
                  }}
                />
                <Card.Body>
                  <Card.Title>{poem.title}</Card.Title>
                  <Card.Subtitle>{poem.author}</Card.Subtitle>
                  <Card.Text>{poem.content}</Card.Text>
                  <Card.Text>{poem.genre}</Card.Text>
                </Card.Body>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
}

export default LatestPoetry;

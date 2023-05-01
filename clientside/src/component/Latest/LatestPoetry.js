import React, { useState, useEffect } from "react";
import "./LatestPoetry.css";
import { Card } from "react-bootstrap";
import { getAllPoetry } from "../../service/authService";
import img from "../../assets/jpeg/logo.png";

function LatestPoetry() {
  const [poetry, setPoetry] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 10;
  useEffect(() => {
    const fetchPoetry = async () => {
      const result = await getAllPoetry();
      const allPoetry = result.data;
      console.log(
        "🚀 ~ file: LatestPoetry.js:14 ~ fetchPoetry ~ allPoetry:",
        allPoetry
      );
      setPoetry(allPoetry);
    };

    fetchPoetry();
  }, []);

  // // Calculate total number of pages
  // const totalPages = Math.ceil(poetry.length / itemsPerPage);

  // // Update current page
  // const handlePageChange = (newPage) => {
  //   setCurrentPage(newPage);
  // };

  // // Calculate start and end index for current page
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;

  return (
    <div className="latestpoetry--page">
      <h3 style={{ color: "white", padding: "1rem" }}>Recently Added Poetry</h3>
      <div className="row d-flex justify-content-center align-items-center">
        {poetry.map((poem) => {
          let path = `http://localhost:5001/upload/${poem.image}`;
          console.log(
            "🚀 ~ file: LatestPoetry.js:44 ~ LatestPoetry ~ path:",
            path
          );

          return (
            <Card
              className="mx-2"
              key={poem.id}
            >
              <div
                className="card"
                img={path}
                style={{
                  color: "red",
                  backgroundImage: `url(${path})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Card.Body>
                  <Card.Title>{poem.title}</Card.Title>
                  <Card.Subtitle>{poem.author}</Card.Subtitle>
                  <Card.Text>{poem.content}</Card.Text>
                  <Card.Text>{poem.genre}</Card.Text>
                </Card.Body>
              </div>
            </Card>
          );
        })}
      </div>

      {/* <div className="pagination-buttons">
      <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="pagination-button"
            >
              <i class="fa fa-angle-double-left" aria-hidden="true"></i>
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="pagination-button"
            >
              <i class="fa fa-angle-double-right"  aria-hidden="true"></i>
            </button>
      </div> */}
    </div>
  );
}

export default LatestPoetry;

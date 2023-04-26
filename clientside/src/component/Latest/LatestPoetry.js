import React, { useState } from "react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const poemsPerPage = 6;

  // Logic for displaying poems
  const indexOfLastPoem = currentPage * poemsPerPage;
  const indexOfFirstPoem = indexOfLastPoem - poemsPerPage;
  const currentPoems = poetry.slice(indexOfFirstPoem, indexOfLastPoem);

  // Logic for updating current page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="latestpoetry--page">
        <h3 style={{ color: "white", padding: "1rem" }}>
          Recently Added Poetry
        </h3>
        <div className="row d-flex justify-content-center align-items-center">
          {currentPoems.map((poem) => (
            <Card className="card_style mx-2" key={poem.id}>
              <div className="card">
                <Card.Text>{poem.title}</Card.Text>
                <Card.Text>{poem.content}</Card.Text>
                <Card.Text>{poem.author}</Card.Text>
                <Card.Text>{poem.genre}</Card.Text>
              </div>
            </Card>
          ))}
        </div>
        <div className="pagination">
          <ul className="pagination-list">
            {poetry.length > poemsPerPage &&
              Array(Math.ceil(poetry.length / poemsPerPage))
                .fill(null)
                .map((_, index) => (
                  <li
                    key={index + 1}
                    className={`pagination-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default LatestPoetry;

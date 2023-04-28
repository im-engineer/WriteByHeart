import React, { useState, useEffect } from "react";
import "./LatestPoetry.css";
import { Card } from "react-bootstrap";
import { getAllPoetry } from "../../service/authService";

function LatestPoetry() {
  const [poetry, setPoetry] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const fetchPoetry = async () => {
      const result = await getAllPoetry();
      const allPoetry = result.data
      console.log("🚀 ~ file: LatestPoetry.js:14 ~ fetchPoetry ~ allPoetry:", allPoetry)
      setPoetry(allPoetry);
    };

    fetchPoetry();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = poetry.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(poetry.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li
        key={number}
        className={currentPage === number ? "active" : null}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </li>
    );
  });

  return (
    <div className="latestpoetry--page">
      <h3 style={{ color: "white", padding: "1rem" }}>Recently Added Poetry</h3>
      <div className="row d-flex justify-content-center align-items-center">
        {currentItems.map((poem) => (
          <Card className="card_style mx-2" key={poem.id}>
            <div className="card">
              <Card.Text>{poem.title}</Card.Text>
              <Card.Text>{poem.author}</Card.Text>
              <Card.Text>{poem.content}</Card.Text>
              <Card.Text>{poem.genre}</Card.Text>
            </div>
          </Card>
        ))}
      </div>
      <ul id="page-numbers">{renderPageNumbers}</ul>
      <div className="pagination-buttons">
        <button
          onClick={() =>
            setCurrentPage((prevPage) => (prevPage === 1 ? prevPage : prevPage - 1))
          }
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentPage((prevPage) =>
              prevPage === pageNumbers.length ? prevPage : prevPage + 1
            )
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default LatestPoetry;

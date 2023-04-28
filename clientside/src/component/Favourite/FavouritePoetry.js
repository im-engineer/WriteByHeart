import React from 'react'
import './FavouritePoetry.css'
function FavouritePoetry() {
  return (
    <div className='favouritepoetry--page'>
            <h3 style={{color:"white", float:"right", padding:"1rem"}}>Most Liked Poetry</h3>

            {/* // const [currentPage, setCurrentPage] = useState(1);
  // const poemsPerPage = 6;

  // Logic for displaying poems
  // const indexOfLastPoem = currentPage * poemsPerPage;
  // const indexOfFirstPoem = indexOfLastPoem - poemsPerPage;
  // const currentPoems = poetry.slice(indexOfFirstPoem, indexOfLastPoem);

  // Logic for updating current page
  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // }; */}
    </div>
  )
}

export default FavouritePoetry


{/* <div className="pagination">
          <ul className="pagination-list"> */}
            {/* {poetry.length > poemsPerPage &&
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
                ))} */}
          {/* </ul> */}
        {/* </div> */}
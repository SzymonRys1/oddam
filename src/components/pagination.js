import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, page }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            {pageNumbers.map(number =>
                <div key={number} className={number === page ? "pagination_element element_active" : "pagination_element"}>
                    <div className="pagination_element" onClick={() => paginate(number)}>
                        {number}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Pagination;
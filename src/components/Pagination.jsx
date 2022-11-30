import React from "react";

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }
    const dec = () => {
        if(currentPage > 1) {
            setCurrentPage(prev => prev - 1)
        }
    }
    const inc = () => {
        if(currentPage < pages.length) {
            setCurrentPage(prev => prev + 1)
        }
    }

    return (
        <div className='pagination'>
            <button onClick={dec}>
                <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.54934 6.392L0.789342 3.668L3.54934 0.944H5.27734L2.50534 3.668L5.27734 6.392H3.54934Z" fill="#404B52"/>
                </svg>
            </button>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? "active" : ""}>
                        {page}
                    </button>
                );
            })}
            <button onClick={inc}>
                <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.866217 0.944H2.59422L5.35422 3.668L2.59422 6.392H0.866217L3.63822 3.668L0.866217 0.944Z" fill="#404B52"/>
                </svg>
            </button>
        </div>
    );
};

export default Pagination;
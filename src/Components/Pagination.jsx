import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-4">
      <button 
        onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)} 
        className={`mx-2 p-2 rounded ${currentPage === 1 ? 'bg-gray-400' : 'bg-gray-600'}`}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pages.map(page => (
        <button 
          key={page} 
          onClick={() => onPageChange(page)} 
          className={`mx-2 p-2 rounded ${page === currentPage ? 'bg-blue-600' : 'bg-gray-600'}`}
        >
          {page}
        </button>
      ))}
      <button 
        onClick={() => onPageChange(currentPage < totalPages ? currentPage + 1 : totalPages)} 
        className={`mx-2 p-2 rounded ${currentPage === totalPages ? 'bg-gray-400' : 'bg-gray-600'}`}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
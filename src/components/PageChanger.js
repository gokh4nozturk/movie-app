import React, { useState } from "react";

function PageChanger({ page, setPage }) {
  return (
    <div className="page-changer">
      <button
        className="btn btn-primary"
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Previous Page
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next Page
      </button>
    </div>
  );
}
export default PageChanger;

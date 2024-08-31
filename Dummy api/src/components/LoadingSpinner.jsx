import React from "react";

function LoadingSpinner() {
  return (
    <>
      <div class="text-center spinner">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default LoadingSpinner;

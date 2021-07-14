import React from "react";

function MoreButton({ onMoreClick}) {
  const handleMoreClick = () => {
    onMoreClick()
  }
  return <button onClick={handleMoreClick}>More sushi!</button>;
}

export default MoreButton;

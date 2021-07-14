import React, { useState } from "react";

function Sushi({ piece, onPlateClick, onHandlePrice, balance }) {
  const [eaten, setEaten] = useState(false)

  const handlePlateClick = () => {
    if(balance >= piece.price) {
      if(!eaten) {
        onPlateClick(piece)
        setEaten(true)
        onHandlePrice(piece.price)
      }
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handlePlateClick}>
        {eaten ? null : (
          <img
            src={piece.img_url}
            alt={piece.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {piece.name} - ${piece.price}
      </h4>
    </div>
  );
}

export default Sushi;

import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushi, onPlateClick, onMoreClick, onHandlePrice, balance }) {
  return (
    <div className="belt">
      {sushi.map(piece => <Sushi 
        balance={balance}
        key={piece.id}
        onHandlePrice={onHandlePrice}
        onPlateClick={onPlateClick} 
        piece={piece} 
        />)
      }
      <MoreButton 
        onMoreClick={onMoreClick}
      />
    </div>
  );
}

export default SushiContainer;

import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [allSushi, setAllSushi] = useState([])
  const [plates, setPlates] = useState([])
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(4)
  const [balance, setBalance] = useState(100)
  const displaySushi = allSushi.slice(start, end)

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(data => setAllSushi(data))
  }, [])

  const handleMoreClick = () => {
    if(start < 96 && end < 100){
      setStart(start => start + 4)
      setEnd(end => end + 4)
    } else {
      setStart(0)
      setEnd(4)
    }
  }
  const handleEatSushi = (piece) => {
    setPlates([...plates, piece])
  }
  const handlePrice = (price) => {
    if (price <= balance) {
      setBalance(balance => balance - price)
    }
  }

  return (
    <div className="app">
      <SushiContainer
        balance={balance}
        sushi={displaySushi}
        onPlateClick={handleEatSushi}
        onMoreClick={handleMoreClick}
        onHandlePrice={handlePrice}
      />
      <Table 
        plates={plates}
        balance={balance} 
      />
    </div>
  );
}

export default App;

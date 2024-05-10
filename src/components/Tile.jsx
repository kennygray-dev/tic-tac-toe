function Tile({className, value, onClick, playerTurn}) {
  let hoverClass= null;
  if (value == null && playerTurn !=null){
    hoverClass= `${playerTurn.toLowerCase()}-hover`
  }

  let valueClass = null;
  if (value === "X") {
    valueClass = "x";
  } else if (value === "O") {
    valueClass = "o";
  }

  return (
  <div 
    onClick={onClick} 
    className={`tile ${className} ${hoverClass} ${valueClass} `} >{value}
  </div>
  );
}

export default Tile;
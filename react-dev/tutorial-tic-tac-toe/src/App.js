function Square({value}) {

  function handleClick() {
    console.log('Clicked');
  };

  // Curly braces {} are used to escape from jsx into js and execute js code. 
  return  (
    <button 
      className="square"
      onClick={handleClick}
    >
        {value}
    </button>
  );
};
export default function Board() {
  return (
  <>
  <div className="board-row">
    {/* Custom components start with a capital letter */}
   <Square value="1" />
   <Square value="2" />
   <Square value="3" />
  </div>

<div className="board-row">
   <Square value="4" />
   <Square value="5" />
   <Square value="6" />
</div>

<div className="board-row">
   <Square value="7" />
   <Square value="8" />
   <Square value="9" />
</div>

  </>
  );
}

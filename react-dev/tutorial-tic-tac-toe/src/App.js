function Square() {
  return  <button className="square">1</button>;
};
export default function Board() {
  return (
  <>
  <div className="board-row">
    {/* Custom components start with a capital letter */}
   <Square />
   <Square />
   <Square />
  </div>

<div className="board-row">
   <Square />
   <Square />
   <Square />
</div>

<div className="board-row">
   <Square />
   <Square />
   <Square />
</div>

  </>
  );
}

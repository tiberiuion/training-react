// Import sate.
import { useState } from 'react';

function Square() {
  // Add state to the component.
  const [value, setValue] = useState(null);

  function handleClick() {
    // Update value to X when component is clicked.
    setValue('X');
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
   <Square  />
   <Square  />
   <Square  />
  </div>

<div className="board-row">
   <Square  />
   <Square  />
   <Square  />
</div>

<div className="board-row">
   <Square  />
   <Square  />
   <Square  />
</div>

  </>
  );
}

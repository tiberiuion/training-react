# To run this project

- cd into this folder react-dev/tutorial-tic-tac-toe
- run npm start

## Concepts
Components

Passing data trhough props

Making components interactive
-    Defined a custom function
-    Used it on the onclick attribute

Adding state to a component
 
 Lifting state up

 "To collect data from multiple children, or to have two child components communicate with each other, declare the shared state in their parent component instead. The parent component can pass that state back down to the children via props. This keeps the child components in sync with each other and with their parent."
 
 [React.dev](https://react.dev/learn/tutorial-tic-tac-toe#completing-the-game)

## Beyond the tutorial
Below are recommended steps to build on the knowledge gained in the tutorial.

For the current move only, show “You are at move #…” instead of a button.

Rewrite Board to use two loops to make the squares instead of hardcoding them.

Add a toggle button that lets you sort the moves in either ascending or descending order.

When someone wins, highlight the three squares that caused the win (and when no one wins, display a message about the result being a draw).

Display the location for each move in the format (row, col) in the move history list.
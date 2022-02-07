import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from "./actions/index";


export const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <h1> Welcome to REdux </h1>
      <div className="container">

        <h1>Increment/Decrement counter</h1>
        <h4>usung React and Redux</h4>

        <div>
          <span> <button onClick={() => dispatch(decNumber())}> - </button> </span>
          <input type="text" value={myState} />
          <span> <button onClick={() => dispatch(incNumber())}> + </button>  </span>
        </div>
      </div>
    </>
  )
}

export default App;
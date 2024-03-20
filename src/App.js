import React from "react";
import {useSelector, useDispatch} from  'react-redux';
import {actions} from './slices/counter';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <span>{count}</span>
      <button onClick={ ()=> dispatch(actions.increment())}>increment</button>
      <button onClick={ () => dispatch(actions.decrement())}>decrement</button>     
    </div>
  );
}

export default App;

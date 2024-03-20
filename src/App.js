import React from "react";
import {useSelector, useDispatch} from  'react-redux';
import {actions} from './slices/counter';
import {userActions} from './slices/user';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.condition);
  return (
    <>
    <div>
      <span>{count}</span>
      <button onClick={ ()=> dispatch(actions.increment())}>increment</button>
      <button onClick={ () => dispatch(actions.decrement())}>decrement</button>     
    </div>
    <div>
      <span>{user}</span>
      <button onClick={()=> dispatch(userActions.find())}>find</button>
      <button onClick={()=> dispatch(userActions.lose())}> lose</button>
    </div>
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './startCounter.css';

import { useSelector, useDispatch } from 'react-redux';
import allActions from '../actions';
//import { increment, decrement } from '../actions/counterAction';
//import { connect } from 'react-redux';

function Counter(props) {
  // using useSelector and useDispatch
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="Timer">
      <Button
        className="startCount"
        onClick={() => dispatch(allActions.counterAction.increment())}
      >
        +
      </Button>
      <h1> {counter} </h1>
      <Button
        className="stopCount"
        onClick={() => dispatch(allActions.counterAction.decrement())}
      >
        -
      </Button>
    </div>
  );
}
export default Counter;

// using connect function
/*
  return (
    <div className="Timer">
      <Button className="startCount" onClick={() => props.increment()}>
        +
      </Button>
      <h1> {props.count} </h1>
      <Button className="stopCount" onClick={() => props.decrement()}>
        -
      </Button>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = () => {
  return {
    increment,
    decrement,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Counter);
*/

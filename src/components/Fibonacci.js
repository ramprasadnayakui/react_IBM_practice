import React, { useState, useEffect } from 'react';

export default function Fibonacci() {
  const [prev1, setPrev1] = useState(1);
  const [prev2, setPrev2] = useState(0);
  const [fibArray, setFibArray] = useState([prev2, prev1]);

  const clickIncrease = () => {
    let current = prev1 + prev2;
    setFibArray((fibArray) => [...fibArray, current]);
    setPrev1(current);
    setPrev2(prev1);
  };
  const clickDecrease = () => {
    if(fibArray.length>2){
      setPrev2(prev1-prev2);
      setPrev1(prev2);
      fibArray.pop();
      setFibArray(fibArray);
    }
  };

  return (
    <div>
      <p>{fibArray.join()}</p>
      <button onClick={clickDecrease} className="btn btn-secondary">
        -
      </button>
      <button onClick={clickIncrease} className="btn btn-primary">
        +
      </button>
    </div>
  );
}

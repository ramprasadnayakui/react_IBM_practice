import React, { useState } from 'react';

export default function closureExa() {

  function showResult1(){
    let args = [...arguments]
    let total = args.reduce((total, value)=>total+value)
    return total;
  }
  function showResult2(){
    var args1 = [...arguments]
    function addResult(){
      var args2 = [...arguments]
      return showResult2(...args1,...args2)
    }
    var total = args1.reduce((total, value)=>total+value)
    addResult.value = total;
    return addResult;
  }

  return (
    <div>
      <p>sum(1,2,3,4,5)={showResult1(1,2,3,4,5)}</p>

      <p>sum(1)(2)(3)(4)(5)={showResult2(1)(2)(3)(4)(5).value}</p>
    </div>
  );
}

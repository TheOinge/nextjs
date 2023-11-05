import React, { useState, useEffect } from 'react';

export default function CountButton() {
  let [countBy1, setCountBy1] = useState(0); // State for button that increments by 1
  let [countBy2, setCountBy2] = useState(0); // State for button that increments by 2

  function handleClickBy1() {
    setCountBy1(countBy1 + 1);
  }

  function handleClickBy2() {
    setCountBy2(countBy2 + 2);
  }

  function rollOverCountBy1() {
    if (countBy1 > 10) {
      setCountBy1(0);
    }
  }

  function rollOverCountBy2() {
    if (countBy2 > 10) {
      setCountBy2(0);
    }
  }

  useEffect(rollOverCountBy1, [countBy1]);
  useEffect(rollOverCountBy2, [countBy2]);

  return (
    <div>
      <button onClick={handleClickBy1}>+1</button>
      <div>{countBy1}</div>
      <button onClick={handleClickBy2}>+2</button>
      <div>{countBy2}</div>
    </div>
  );
}

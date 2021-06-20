import React, { Component, useCallback, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { add, getInput } from './inputSlice';

const DynamicInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const input = useAppSelector(getInput);
  const dispatch = useAppDispatch();

  console.log('render input');

  const handleKeyPress = (event: any) => {
    console.log('event target', event.target.value);
    console.log('key', event.key);
    if (event.key.length < 2) {
      console.log('before dispatch key');
      dispatch(add(event.key));
    }
  };

  return (
    <div className="interface">
      <input className="input" type="text" onKeyDown={handleKeyPress} />;
      <div className="output">{input}</div>
    </div>
  );
};

export default DynamicInput;

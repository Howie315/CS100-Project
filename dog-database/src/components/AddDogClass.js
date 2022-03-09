import React, {useState, useRef, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function AddDogClass(props){
  const [input, setInput] = useState(props.edit ? props.edit.description : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='addDog-class'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='dog-input edit'
          />
          <button onClick={handleSubmit} className='dog-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a dog'
            value={input}
            onChange={handleChange}
            name='text'
            className='dog-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='dog-button'>
            Add Dog
          </button>
        </>
      )}
    </form>
  );
}
export default AddDogClass;



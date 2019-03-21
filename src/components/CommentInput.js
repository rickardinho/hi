import React from 'react';
import { Input } from '../styles/styles';


const CommentInput = ({ value, inputKey, dataType, handleChange, farmKey }) => {


  return (


    <Input
      type='text'
      value={value}
      onChange={text => handleChange(text.target.value, inputKey, dataType, farmKey) }
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          // want to focus on next inputKey
          console.log('Enter key pressed');
          handleChange(value, inputKey, dataType, farmKey);
          e.target.blur();
        }
      }}
    />

  );
};

export default CommentInput;

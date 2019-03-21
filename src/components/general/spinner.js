import React from 'react';
import Loader from 'react-loader-spinner';
// import { moderateScale } from '../../../styles/scaling';
import colours from '../../styles/colours';


export default function Spinner () {
  // console.log('size', size);
  // const newSize = size || 2;
  // console.log('newSize', newSize);
  // const scaledSize = moderateScale(newSize);
  const color = colours.main;

  return (
    <div>
      <Loader
        type='Oval'
        height='80'
        width='80'
        color={color}
      />
    </div>
  );
}

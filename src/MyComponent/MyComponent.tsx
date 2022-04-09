// Demo component
// this is only example component

import React from 'react';
import './MyComponent.style';

interface MyComponentProps {
  name: string;
}
export default function MyComponent (props: MyComponentProps) {

  const { name } = props;

    return (
      <div className='my-component'>
        <i className='icon-test'>One</i><br></br>
        <i className='icon-test'>Two</i><br></br>
        <i className='icon-test'>Three</i> <br/>
        <div className='name-holder'>My name is - {name}</div>
      </div>
    )
  
}
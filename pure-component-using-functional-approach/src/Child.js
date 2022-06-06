import React, { memo } from 'react';
  
function Child(props) {
  console.log('Child rendered');
  return (
    <div>{ props.message }</div>
  );
}
  
export default memo(Child);
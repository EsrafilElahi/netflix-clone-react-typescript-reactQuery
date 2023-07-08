import React from 'react';


const Movies = (props: {title: string}) => {
  const {title} = props;

  return (
    <div>hi {title} page</div>
  )
}

export default Movies
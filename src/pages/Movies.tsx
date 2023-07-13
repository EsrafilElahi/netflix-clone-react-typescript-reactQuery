import React from 'react';


interface MovieProps {
  title: string;
}

const Movies: React.FC<MovieProps> = (props) => {
  const {title} = props;

  return (
    <div>hi {title} page</div>
  )
}

export default Movies
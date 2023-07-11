import React from 'react';
import { fet } from '@utils/axios';


interface MovieProps {
  title: string;
}

const Movies: React.FC<MovieProps> = (props) => {
  const {title} = props;
  console.log(fet)

  return (
    <div>hi {title} page</div>
  )
}

export default Movies
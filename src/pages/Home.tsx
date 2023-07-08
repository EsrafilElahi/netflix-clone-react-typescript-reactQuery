import React from 'react';


const Home = (props: { title: string }) => {
  const {title} = props;

  return (
    <div>Hello {title} page</div>
  )
}

export default Home
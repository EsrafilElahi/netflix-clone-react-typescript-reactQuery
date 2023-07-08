import React from 'react';


const Home = (props: { title: string }) => {
  const {title} = props;

  return (
    <div className='text-3xl font-bold underline'>Hello {title} page</div>
  )
}

export default Home
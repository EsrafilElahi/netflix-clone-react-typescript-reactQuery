import React from 'react';

interface HomeProps {
  title: string;
}

const Home: React.FC<HomeProps> = (props) => {
  const { title } = props;

  return <div className='text-3xl font-bold underline'>Hello {title} page</div>;
};

export default Home;

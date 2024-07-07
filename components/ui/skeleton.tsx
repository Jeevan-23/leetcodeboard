import React from 'react';

const Skeleton = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
      <h1 className="text-2xl font-bold"> Loading...</h1>
    </div>
  );
}

export default Skeleton;



import React from 'react';

export default function Background() {
  return (
    <div className="bg-pr-black-200 h-screen w-screen z-[-1] fixed ">
      <div className="h-screen fixed   w-[50%] z-[-1]  bg-gradient-to-r from-pr-black-100 to-pr-black-200"></div>
    </div>
  );
}

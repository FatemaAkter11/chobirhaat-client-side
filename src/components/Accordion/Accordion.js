import React, { useState } from 'react';

const Accordion = ({ ques, ans }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="my-5 md:w-1/2 sm:w-full px-2 mx-auto">
      <div className="bg-gray-200 flex justify-between p-3 rounded-t-lg cursor-pointer" onClick={() => setIsActive(!isActive)}>
        <div className="font-semibold">Q: {ques}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="p-3 bg-gray-100 transition duration-500 ease-out rounded-b-lg">{ans}</div>}
    </div>
  );
};

export default Accordion;
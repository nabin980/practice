import React, { useState } from 'react';

const TaskThree = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState({ length: 0, chain: [] });

  function longestConsecutiveChain(arr) {
    if (arr.length === 0) return { length: 0, chain: [] };
  
    const numSet = new Set(arr);
    let longestChain = [];
  
    for (const num of numSet) {
      if (!numSet.has(num - 1)) {
        let currentNum = num;
        let currentChain = [currentNum];
  
        while (numSet.has(currentNum + 1)) {
          currentNum += 1;
          currentChain.push(currentNum);
        }
  
        if (currentChain.length > longestChain.length) {
          longestChain = currentChain;
        }
      }
    }
  
    return { length: longestChain.length, chain: longestChain };
  }
  const handleClick = () => {
    const numbers = inputValue.split(',').map(num => parseInt(num.trim()));
    
    const { length, chain } = longestConsecutiveChain(numbers);
    setResult({ length, chain });
  };

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <input
        placeholder='Enter numbers separated by commas, e.g. 2, 3, 4, 5'
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-1 outline-none text-sm border border-gray-400 px-5 py-2 my-5 rounded-full w-3/4 sm:w-1/2"
      />
      <button
        onClick={handleClick}
        className='bg-black text-white text-sm px-10 py-4 rounded-full'
      >
        Check Longest Chain
      </button>
      {result.length > 0 && (
        <div className="mt-5 text-lg">
          <div>Longest Consecutive Chain Length: {result.length}</div>
          <div>Chain Numbers: {result.chain.join(', ')}</div>
        </div>
      )}
    </div>
  );
};

export default TaskThree;

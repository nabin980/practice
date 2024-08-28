import React, { useState } from "react";

const bisectLeft = (arr, x) => {
  let low = 0, high = arr.length;
  while (low < high) {
    const mid = (low + high) >>> 1;
    if (arr[mid] < x) low = mid + 1;
    else high = mid;
  }
  return low;
};

const insortLeft = (arr, x) => {
  const pos = bisectLeft(arr, x);
  arr.splice(pos, 0, x);
};

const TaskFive = () => {
  const [input, setInput] = useState("");
  const [nums, setNums] = useState([]);
  const [result, setResult] = useState([]);

  const parseInput = (input) => {
    return input.split(",").map(num => parseInt(num.trim(), 10)).filter(num => !isNaN(num));
  };

  const countSmaller = (nums) => {
    const sortedList = [];
    const counts = [];

    for (let i = nums.length - 1; i >= 0; i--) {
      const num = nums[i];
      const count = bisectLeft(sortedList, num);
      counts.push(count);
      insortLeft(sortedList, num);
    }

    return counts.reverse();
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleCalculate = () => {
    const numbers = parseInput(input);
    if (numbers.length === 0) {
      setResult(["Invalid input. Please enter numbers separated by commas."]);
    } else {
      setNums(numbers);
      setResult(countSmaller(numbers));
    }
  };

  return (
    <div>
      <h1>Count Smaller Elements to the Right Sorry Can't do</h1>
      <div>
        <label>
          Enter numbers (comma separated):
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="e.g. 5, 2, 6, 1"
          />
        </label>
        <button onClick={handleCalculate}>Calculate</button>
      </div>
      <div>
        <h2>Input Array</h2>
        <p>{nums.length > 0 ? JSON.stringify(nums) : "No input provided"}</p>
      </div>
      <div>
        <h2>Result</h2>
        <p>{result.length > 0 ? JSON.stringify(result) : "No result available"}</p>
      </div>
    </div>
  );
};

export default TaskFive;

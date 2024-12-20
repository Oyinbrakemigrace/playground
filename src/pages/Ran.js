import React, { useMemo, useState } from "react";

const Ran = () => {
  const [value, setValue] = useState(0);
  const [counter, setCounter] = useState(0);

  const cubeOfNumber = (num) => {
    console.log("Calculated correctly!");
    return Math.pow(num, 3);
  };

  const result = useMemo(() => {
    return cubeOfNumber(value);
  }, [value]);

  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <input
        type="number"
        className="p-2 border"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <h1 className="font-bold text-4xl">Cube of the number : {result}</h1>

      <h1 className="my-10 text-3xl">Current counter value : {counter}</h1>
      <div className="flex gap-4">
        <button
          className="bg-green-500 text-white font-semibold rounded-sm px-2 py-1"
          type="button"
          onClick={() => setCounter(counter + 1)}
        >
          Add
        </button>
        <button
          className="bg-red-500 text-white font-semibold rounded-sm px-2 py-1"
          type="button"
          onClick={() => setCounter(prev => prev - 1)}
        >
          Minus
        </button>
      </div>
    </div>
  );
};

export default Ran;

//useMemo is used to memoize values accross renders.

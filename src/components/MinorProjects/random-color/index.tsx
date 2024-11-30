import React, { useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState<string>("hex");
  const [color, setColor] = useState<string>("#000000");

  function randomColorUtility(length: number) {
    return Math.floor(Math.random() * length);
  }

  const generateHEXColor = () => {
    const hex: Array<number | string> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor: string = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
    setTypeOfColor("hex");
  };

  const generateRGBColor = () : void => {
    const redColorValue: number = randomColorUtility(256);
    const greenColorValue: number = randomColorUtility(256);
    const blueColorValue: number = randomColorUtility(256);
    setColor(`rgba(${redColorValue}, ${greenColorValue}, ${blueColorValue})`)
    setTypeOfColor("rgb");
  };

  const generateRandomColor = () => {
    Math.random() > 0.5 ? generateHEXColor() : generateRGBColor();
  };

  return (
    <div
      className="h-screen w-screen flex flex-col justify-center items-center"
      style={{ background: color }}
    >
      <div className="text-white text-2xl mb-4">
        {color} ({typeOfColor.toUpperCase()})
      </div>
      <div className="space-x-4">
        <button
          className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          onClick={generateHEXColor}
        >
          Create HEX Color
        </button>
        <button
          className="text-white bg-green-500 px-4 py-2 rounded hover:bg-green-600"
          onClick={generateRGBColor}
        >
          Create RGB Color
        </button>
        <button
          className="text-white bg-purple-500 py-2 px-4 rounded hover:bg-purple-500"
          onClick={generateRandomColor}
        >
          Generate Random Color
        </button>
      </div>
    </div>
  );
};

export default RandomColor;

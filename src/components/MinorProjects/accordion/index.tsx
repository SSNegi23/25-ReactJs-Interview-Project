import React, { useState } from "react";
import data from "./data";

const Accordion: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [enableMultiSelection, setEnableMultiSelection] =
    useState<boolean>(false);
  const [multipleSelected, setMultipleSelected] = useState<Array<number>>([]);

  const handleSingleSelection = (id: number): void => {
    setSelected(id === selected ? null : id);
  };

  const handleMultiSelection = (id: number): void => {
    let copyMultipleSelected = [...multipleSelected];
    const findIndexOfCurrentId = copyMultipleSelected.indexOf(id);

    if (findIndexOfCurrentId === -1) {
      copyMultipleSelected.push(id);
    } else {
      copyMultipleSelected.splice(findIndexOfCurrentId, 1);
    }
    setMultipleSelected(copyMultipleSelected);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-4">
      <button
        className="bg-black text-white p-2 font-semibold text-lg cursor-pointer rounded"
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
      >
        {enableMultiSelection ? "Disable" : "Enable"} Multiple Selection
      </button>
      <div className="w-[500px]">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="bg-orange-900 mb-1 p-2">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="text-white flex justify-between items-center my-2 font-semibold cursor-pointer"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multipleSelected.indexOf(dataItem.id) !== -1 ? (
                <div className="text-white h-auto">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;

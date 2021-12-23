import React from "react";
import { SortHistoryStep, ElementStatus } from "../../../../types";
import { Bar } from "./components/bar/Bar";

type Props = {
  max: number;
  sortHistorySteps: SortHistoryStep[];
  step: number;
};

const getElementStatus = (index: number, sortHistoryStep: SortHistoryStep) => {
  let barStatus: ElementStatus;
  if (sortHistoryStep.swapping.includes(index)) {
    barStatus = "swapping";
  } else if (sortHistoryStep.sorted.includes(index)) {
    barStatus = "sorted";
  } else if (sortHistoryStep.comparing.includes(index)) {
    barStatus = "comparing";
  } else barStatus = "waiting";
  return barStatus;
};

export const Chart: React.FC<Props> = ({ max, sortHistorySteps, step }) => {
  const array = sortHistorySteps[step].array;
  const size = array.length;
  return (
<<<<<<< HEAD
    <div className="h-[45vh] flex flex-row items-end">
=======
    <div className="h-full flex flex-row items-end">
>>>>>>> c810685 (Compose Menu)
      {array.map((value, index) => {
        const width = 100 / size;
        const height = (value / max) * 100;

        const marginRight = index === size ? "mr-0" : "mr-[0.1rem]";
        const className = marginRight;

        const status = getElementStatus(index, sortHistorySteps[step]);

        return (
          <Bar
            width={width}
            height={height}
            className={className}
            key={index}
            status={status}
          />
        );
      })}
    </div>
  );
};

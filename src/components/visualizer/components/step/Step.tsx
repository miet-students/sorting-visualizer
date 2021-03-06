import React from "react";
import { Optional } from "../../../common/Optional";

type Props = {
  step: number;
  max: number;
  className?: string;
  show: boolean;
};

export const Step: React.FC<Props> = ({ step, max, className, show }) => {
  let className_ = "badge badge-lg badge-primary";

  if (className !== undefined) {
    className_ = className_ + " " + className;
  }

  return (
    <Optional show={show}>
      <span className={className_}>{`Step: ${step} / ${max}`}</span>
    </Optional>
  );
};

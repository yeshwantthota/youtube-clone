import React from "react";
import Button from "./Button";
import { buttonListData } from "../utils/buttonListData";

const ButtonList = () => {
  return (
    <div className="flex">
      {buttonListData.map((data, index) => (
        <Button key={index} name={data} />
      ))}
    </div>
  );
};

export default ButtonList;

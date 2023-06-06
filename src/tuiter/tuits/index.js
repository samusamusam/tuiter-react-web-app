import React from "react";
import { useSelector } from "react-redux";
import TuitItem from "./tuit-item";

const TuitsList = () => {
  const { tuits } = useSelector((state) => state.tuits);
  return (
    <ul className="list-group">
      {tuits.map((tuit) => (
        <div key={tuit._id}>
          <TuitItem tuit={tuit} />
        </div>
      ))}
    </ul>
    
  );
};
export default TuitsList;

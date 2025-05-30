import React from "react";
import { Link } from "react-router-dom";

const PinCard = ({ pin }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg relative group cursor-pointer mb-4">
      <img
        src={pin.image.url}
        alt=""
        className="w-full h-auto"
        style={{ display: "block" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
        <Link
          to={`/pin/${pin._id}`}
          className="bg-yellow-500 hover:bg-purple-700 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          View Clip
        </Link>
      </div>
    </div>
  );
};

export default PinCard;

import React from "react";
import { usePinData } from "../../context/PinContext";
import { Loading } from "../components/Loading";
import PinCard from "../components/PinCard";
const Home = () => {
  const { pins, loading } = usePinData();
  console.log(pins);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex flex-wrap m-4">
              {pins && pins.length > 0 ? (
                pins.map((e, i) => <PinCard key={i} pin={e}/>)
              ) : (
                <p>No pins yet</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

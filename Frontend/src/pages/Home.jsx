import React from "react";
import Masonry from "react-masonry-css";
import { usePinData } from "../../context/PinContext";
import { Loading } from "../components/Loading";
import PinCard from "../components/PinCard";
import styles from "../styles/Home.module.css";

const Home = () => {
  const { pins, loading } = usePinData();

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    0: 2, // Minimum 2 columns on smallest screens
  };

  return (
    <div className="w-full">
      {loading ? (
        <Loading />
      ) : (
        <div className="max-w-7xl mx-auto py-6 px-4">
          {pins && pins.length > 0 ? (
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className={styles.masonryGrid}
              columnClassName={styles.masonryColumn}
            >
              {pins.map((pin, index) => (
                <PinCard key={index} pin={pin} />
              ))}
            </Masonry>
          ) : (
            <p>No pins yet</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;

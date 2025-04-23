import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { usePinData } from "../../context/PinContext";
import PinCard from "../components/PinCard";
import { UserData } from "../../context/userContext";
import Masonry from "react-masonry-css";

import styles from "../styles/UserProfile.module.css"; // Ensure this is properly imported

const UserProfile = ({ user: loggedInUser }) => {
  const params = useParams();
  const [user, setUser] = useState(null);
  const [isFollow, setIsFollow] = useState(false);
  const { pins } = usePinData();
  const { followUser } = UserData();

  // Define breakpoints for responsive Masonry grid
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    0: 2
  };

  useEffect(() => {
    fetchUser();
  }, [params.id]);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(`/api/user/${params.id}`);
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user?.followers && loggedInUser?._id) {
      setIsFollow(user.followers.includes(loggedInUser._id));
    }
  }, [user, loggedInUser]);

  const followHandler = async () => {
    try {
      await followUser(user._id, fetchUser);
    } catch (err) {
      console.error("Follow error:", err);
    }
  };

  const userPins = user && pins ? pins.filter((pin) => pin.owner === user._id) : [];

  if (!user) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-6 w-full">
        <div className="flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
            {user.name && (
              <span className="text-3xl text-gray-700">
                {user.name.slice(0, 1)}
              </span>
            )}
          </div>
        </div>

        <h1 className="text-center text-2xl font-bold mt-4">{user.name}</h1>
        {/* <p className="text-center text-gray-600 mt-2">{user.email}</p> */}

        <div className="flex justify-center items-center text-center gap-3 text-gray-600 mt-2">
          <p>{user.followers?.length || 0} followers</p>
          <p>{user.following?.length || 0} following</p>
        </div>

        {user._id !== loggedInUser._id && (
          <div className="flex justify-center mt-4 space-x-2">
            <button
              onClick={followHandler}
              className="bg-red-200 px-4 py-2 rounded"
            >
              {isFollow ? "Unfollow" : "Follow"}
            </button>
          </div>
        )}

        <div className="max-w-7xl mx-auto py-6 px-4">
          {userPins && userPins.length > 0 ? (
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className={styles.masonryGrid}
              columnClassName={styles.masonryColumn}
            >
              {userPins.map((pin, index) => (
                <PinCard key={index} pin={pin} />
              ))}
            </Masonry>
          ) : (
            <p className="text-center text-gray-500 mt-6">No pins yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

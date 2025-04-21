import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { usePinData } from "../../context/PinContext";
import PinCard from "../components/PinCard";
import { UserData } from "../../context/userContext";

const UserProfile = ({ user: loggedInUser }) => {
    const params = useParams();
    const [user, setUser] = useState(null);
    const [isFollow, setIsFollow] = useState(false);
    const { pins } = usePinData();
    const { followUser } = UserData();
  
    // Fetch user data
    async function fetchUser() {
      try {
        const { data } = await axios.get(`/api/user/${params.id}`);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    }
  
    // Check follow status when user or loggedInUser changes
    useEffect(() => {
      if (user?.followers && loggedInUser?._id) {
        setIsFollow(user.followers.includes(loggedInUser._id));
      }
    }, [user, loggedInUser]); // ✅ Proper dependencies
  
    const followHandler = async () => {
      try {
        await followUser(user._id, fetchUser); // Let this update the backend
        // Don't toggle immediately - wait for fetchUser to complete
      } catch (err) {
        console.error("Follow error:", err);
      }
    };
  
    const userPins = user && pins ? pins.filter((pin) => pin.owner === user._id) : [];
  
    useEffect(() => {
      fetchUser();
    }, [params.id]);
  
    if (!user) return <div>Loading...</div>;
  return (
    <div>
      {user && (
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
            <p className="text-center text-gray-600 mt-2">{user.email}</p>

            <div className="flex justify-center items-center text-center gap-3 text-gray-600 mt-2">
              {user.followers && <p>{user.followers.length} followers</p>}
              {user.following && <p>{user.following.length} followings</p>}
            </div>

            {user && user._id === loggedInUser._id ? ( "" ) :  (<div className="flex justify-center mt-4 space-x-2">
              <button
                onClick={followHandler}
                className="bg-red-200 px-4 py-2 rounded"
              >
                {isFollow ? "Unfollow" : "Follow"}
              </button>
            </div>)}

            <div className="mt-4 flex flex-wrap justify-center gap-4">
              {userPins && userPins.length > 0 ? (
                userPins.map((e) => <PinCard key={e._id} pin={e} />)
              ) : (
                <p>No Pins Yet</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;

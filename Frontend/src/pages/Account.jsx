import React from "react";
import { usePinData } from "../../context/PinContext";
import PinCard from "../components/PinCard";
import { useNavigate } from "react-router-dom";
import { UserData } from "../../context/userContext";
import { toast } from "react-hot-toast";
import axios from "axios";
import Masonry from "react-masonry-css";
import styles from '../styles/Account.module.css'
const Account = ({ user }) => {
  const navigate = useNavigate();
  const { setIsAuth, setUser } = UserData();
  const logoutHandler = async () => {
    try {
      const { data } = await axios.get("/api/user/logout");
      toast.success(data.message);
      navigate("/login");
      setIsAuth(false);
      setUser([]);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const { pins } = usePinData();

  let userPins;

  if (pins) {
    userPins = pins.filter((pin) => pin.owner === user._id);
  }



    // Define breakpoints for responsive Masonry grid
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      0: 2
    };

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="p-6 w-full">
          <div className="flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-3xl text-gray-700">
                {user.name.slice(0, 1)}
              </span>
            </div>
          </div>

          <h1 className="text-center text-2xl font-bold mt-4">{user.name}</h1>
          <p className="text-center text-gray-600 mt-2">{user.email}</p>
          <div className="flex justify-center mt-4 space-x-2">
            <button
              onClick={logoutHandler}
              className="bg-red-200 px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>

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
    </div>
  );
};

export default Account;

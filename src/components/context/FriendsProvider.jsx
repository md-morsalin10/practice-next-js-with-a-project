"use client"
import { useState } from "react";
import { FriendsContext } from "./FriendsContext";



const FriendsProvider = ({ children }) => {

    const [details, setDetails] = useState([]);
  

    const handleBtn = (expectedFriend) => {
        setDetails([...details, expectedFriend]);
        console.log(details);
 
    }
    
    

    // const handleText = (expectedFriends) => {
    //     setTextDetails([...textDetails, expectedFriends])

    //     // toast.success(`Text With ${expectedFriends.name}`, {
    //     //     position: "top-center",
    //     //     autoClose: 5000,
    //     //     hideProgressBar: false,
    //     //     closeOnClick: false,
    //     //     pauseOnHover: true,
    //     //     draggable: true,
    //     //     progress: undefined,
    //     //     theme: "light",
    //     // });
    // }

    // const handleVideo = (expectedFriends) => {
    //     setVideoDetails([...videoDetails, expectedFriends]);

    //     // toast.success(`Video With ${expectedFriends.name}`, {
    //     //     position: "top-center",
    //     //     autoClose: 5000,
    //     //     hideProgressBar: false,
    //     //     closeOnClick: false,
    //     //     pauseOnHover: true,
    //     //     draggable: true,
    //     //     progress: undefined,
    //     //     theme: "light",
    //     // });
    // }

    const data = {
        handleBtn,

    }

    return <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>

};

export default FriendsProvider;
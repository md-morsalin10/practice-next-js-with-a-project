"use client"
import { useState } from "react";
import { FriendsContext } from "./FriendsContext";
import { toast } from "react-toastify";



const FriendsProvider = ({ children }) => {

    const [details, setDetails] = useState([]);
    // const [type, setType] = useState("all");
  

    const handleBtn = (expectedFriend) => {
        setDetails([...details, expectedFriend]);
     
          toast.success(`${expectedFriend.actionType} With ${expectedFriend.name}`);
          
 
    }

    


    const data = {
        handleBtn,
        details,

    }

    return <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>

};

export default FriendsProvider;
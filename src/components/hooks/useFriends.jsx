import React, { useEffect, useState } from 'react';

const useFriends = () => {
    const [friends, setFriends]=useState([]);
    const [loader, setLoader]=useState(true);
    useEffect(()=>{
        const fetchData =async ()=>{
            const res = await fetch("/data.json");
            const data = await res.json();


          setTimeout(() => {
                setFriends(data);
                setLoader(false);
            }, 1500)
        }
        fetchData();
    },[]);


    return {friends, loader};
};

export default useFriends;
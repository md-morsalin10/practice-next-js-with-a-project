import React from 'react';
import HomePageContent from './HomePageContent/HomePageContent';
import CardSection from './CardSection/CardSection';
import AllFriends from './AllFriends/AllFriends';

const HomePage = () => {
    return (
        <div>
            <HomePageContent/>
            <CardSection/>
            <AllFriends/>
        </div>
    );
};

export default HomePage;
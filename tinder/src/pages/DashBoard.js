import React, {useMemo, useRef, useState} from 'react';
import TinderCard from "react-tinder-card";
import ChatBox from "../components/ChatBox";

const db = [
    {
        name: 'Richard Hendricks',
        url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fgirl%2F&psig=AOvVaw3k8hlSe-vEhIsBqZEsr19s&ust=1654355058186000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKDL6P7GkfgCFQAAAAAdAAAAABAL'
    },
    {
        name: 'Erlich Bachman',
        url: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Monica Hall',
        url: './img/monica.jpg'
    },
    {
        name: 'Jared Dunn',
        url: './img/jared.jpg'
    },
    {
        name: 'Dinesh Chugtai',
        url: './img/dinesh.jpg'
    }
]
const DashBoard = () => {

    const characters = db
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
        <div className="dashboard">
            <ChatBox/>
            <div className="swipe-container">
                <div className="card-container">
                    {characters.map((character) =>
                        <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                                <h3>{character.name}</h3>
                            </div>
                        </TinderCard>
                    )}
                    <div className="swipe-info">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
import React from 'react';
import ChatHeader from "./ChatHeader";
import Matches from "./Matches";
import Chatdisplay from "./Chatdisplay";

const ChatBox = () => {
    return (
        <div className='chat-container'>
            <ChatHeader/>

            <div>
                <button className='opt'>Matches</button>
                <button className='opt'>Chat</button>
            </div>

            <Matches/>
            <Chatdisplay/>
            
        </div>
    );
};

export default ChatBox;
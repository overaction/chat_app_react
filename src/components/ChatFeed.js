import { render } from '@testing-library/react';
import React from 'react'
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import OtherMessage from './OtherMessage';

const ChatFeed = (props) => {
    const {chats, activeChat, userName, messages} = props;

    const chat = chats && chats[activeChat];
    console.log(chat, activeChat, userName, messages);

    const renderMessages = () => {
        const keys = Object.keys(messages);
        console.log(keys);

        return keys.map((key,idx) => {
            const message = messages[key];
            const lastMessageKey = idx === 0 ? null : keys[idx-1];
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={`msg_${idx}`} style={{width:'100%'}}>
                    <div className="message-block">
                        {isMyMessage ? 
                        <MyMessage message={message}/> 
                        : <OtherMessage message={message} lastMessage={messages[lastMessageKey]}/>}
                    </div>
                    <div className="read-receipts" style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>
                        read-receipts
                    </div>
                </div>
            )
        })
    }
    renderMessages();

    if(!chat) return 'Loading...'

    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => `${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{height: '100px'}} />
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat}/>
            </div>
        </div>
    )
}

export default ChatFeed

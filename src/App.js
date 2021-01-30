import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="12d7a858-77b9-4a0c-abc2-d5b8e0cabb7a"
            userName="kmc04"
            userSecret="12345"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App

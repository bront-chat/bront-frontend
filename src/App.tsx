import React from 'react';

import 'antd/dist/antd.css';

import ConversationDetails from './components/conversation-details/ConversationDetails';
import { Conversation } from './App.types';

function App() {
  const conversation: Conversation = {
    messages: [
      {
        id: 1,
        author: 'Goku',
        text: "awooooooooo where's the beef lmao",
      },
    ],
  };
  return <ConversationDetails conversation={conversation} />;
}

export default App;

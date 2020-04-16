export interface Conversation {
  messages: Message[];
}

export interface Message {
  id: number;
  text: string;
  author: string;
}

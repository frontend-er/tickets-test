export interface LinksInterface {
  chat_id: string;
  id: string;
  link: string;
  sender: {
    avatar: string;
    name: string;
    type: string;
    uid: number;
  };
  timestamp: number;
}

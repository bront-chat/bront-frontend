import withChatLayout from "../components/ChatLayout";
import { Avatar, Card } from "antd";

const { Meta } = Card;

const Page = () => (
  <Card style={{ width: 300 }}>
    <Meta
      avatar={
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      }
      title="Card title"
      description="This is the description"
    />
  </Card>
);
export default withChatLayout(Page);

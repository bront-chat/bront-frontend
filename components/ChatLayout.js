import { Layout, Avatar, List } from "antd";
const { Content, Sider } = Layout;

const goku = [
  {
    name: "Goku",
    description: "Big peepee",
  },
  {
    name: "Goku",
    description: "Big peepee",
  },
  {
    name: "Goku",
    description: "Big peepee",
  },
  {
    name: "Goku",
    description: "Big peepee",
  },
  {
    name: "Goku",
    description: "Big peepee",
  },
  {
    name: "Goku",
    description: "Big peepee",
  },
  {
    name: "Goku",
    description: "Big peepee",
  },
  {
    name: "Goku",
    description: "Big peepee",
  },
  {
    name: "Goku",
    description: "Big peepee",
  },
  {
    name: "Goku",
    description: "Big peepee",
  },
  {
    name: "Goku",
    description: "Big peepee",
  },
];

const withChatLayout = (Page) => {
  return () => (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider theme="light" width={"300px"}>
        <List
          itemLayout={"vertical"}
          dataSource={goku}
          renderItem={(item) => {
            const { name, description } = item;
            return (
              <List.Item style={{ width: "100%" }}>
                <List.Item.Meta
                  avatar={<Avatar src="/goku.JPG" />}
                  title={name}
                  description={description}
                />
              </List.Item>
            );
          }}
        />
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            Goku has a big pee pee.
          </div>
        </Content>
      </Layout>
      <style jsx>{`
        .ant-layout-sider {
          -webkit-box-shadow: 0 2px 8px #f0f1f2 !important;
          box-shadow: 0 2px 8px #f0f1f2 !important;
        }
      `}</style>
    </Layout>
  );
};

export default withChatLayout;

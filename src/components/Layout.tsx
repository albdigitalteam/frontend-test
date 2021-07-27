import Head from "next/head";
import { Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

const Structure: React.FC = ({ children }) => {
  return (
    <Layout>
      <Head>
        <title>Front-end Test - Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          position: "fixed",
          zIndex: 1,
          width: "100%",
        }}
      >
        <div
          className="logo"
          style={{
            width: 150,
            height: 30,
            marginRight: 20,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          style={{
            minHeight: "100vh",
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  );
};

export default Structure;

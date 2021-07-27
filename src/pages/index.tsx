import { useState, useEffect } from "react";
import { Row, Col, Spin, Alert } from "antd";

/* Components */
import Layout from "~/components/Layout";
import Posts from "~/components/Posts";

/* API */
import api from "~/services/api";

export default function Home() {
  const [posts, setPosts] = useState([]);

  function removeByAttr(value: number) {
    const removed = posts.filter((item: { id: number }) => item?.id !== value);
    setPosts(removed);
  }

  useEffect(() => {
    (async () => {
      await api.get("posts").then((res) => setPosts(res.data));
    })();
  }, []);

  return (
    <Layout>
      {posts.length > 0 ? (
        <Row gutter={24}>
          {posts.map((post) => (
            <Col span={12}>
              <Posts item={post} remove={removeByAttr} />
            </Col>
          ))}
        </Row>
      ) : (
        <div style={{ marginTop: 50 }}>
          <Spin tip="Loading..." size="large" style={{ marginTop: 150 }}>
            <Alert
              message=""
              description=""
              type="info"
              style={{
                width: "100%",
                height: "82.5vh",
              }}
            />
          </Spin>
        </div>
      )}
    </Layout>
  );
}

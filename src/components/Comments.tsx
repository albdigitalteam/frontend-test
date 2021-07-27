import { useState, useEffect } from "react";
import { Form, Input, Button, Comment, Spin, Alert, List, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

/* API */
import api from "~/services/api";

const { TextArea } = Input;

const Comments: React.FC<{
  id: number;
}> = ({ id }) => {
  const [data, setData] = useState<{ name: string; body: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState("");

  function onSubmit() {
    setLoading(true);

    setData([...data, { name: "Victor", body: comment }]);
    setComment("");

    setLoading(false);
  }

  useEffect(() => {
    (async () => {
      await api.get(`comments?postId=${id}`).then((res) => setData(res.data));
    })();
  }, []);

  return (
    <>
      {data.length > 0 ? (
        <>
          <List
            className="comment-list"
            header={`${data && data.length} added comments`}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item: { name: string; body: string }) => (
              <li>
                <Comment
                  avatar={<Avatar icon={<UserOutlined />} />}
                  author={item.name}
                  content={item.body}
                />
              </li>
            )}
          />
          <Form.Item>
            <TextArea
              rows={4}
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              loading={loading}
              onClick={onSubmit}
              type="primary"
            >
              Add Comment
            </Button>
          </Form.Item>
        </>
      ) : (
        <Spin tip="Loading...">
          <Alert
            message=""
            description=""
            type="info"
            style={{ padding: 50 }}
          />
        </Spin>
      )}
    </>
  );
};

export default Comments;

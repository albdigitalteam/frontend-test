import React from "react";
import { PageHeader, Tag, Typography, Collapse, Modal } from "antd";
import {
  CloseCircleOutlined,
  MessageOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";

/* Components */
import Card from "./Card";
import Comments from "./Comments";

const { confirm } = Modal;

const Post: React.FC<{
  item: { id: number; title: string; body: string; userId: number };
  remove: Function;
}> = ({ item, remove }) => {
  return (
    <Card>
      <PageHeader
        title={item?.title && item?.title.substring(0, 40).concat("...")}
        className="site-page-header"
        subTitle={<Tag>Author</Tag>}
        avatar={{
          src: "https://avatars.githubusercontent.com/u/25901216?v=4",
          style: { width: 48, height: 48 },
        }}
        extra={[
          <Tag
            color="error"
            icon={<CloseCircleOutlined />}
            style={{ cursor: "pointer" }}
            onClick={() => {
              confirm({
                title: "Do you want to delete this item?",
                icon: <CloseCircleOutlined style={{ color: "#ff0000" }} />,
                async onOk() {
                  remove(item.id);
                },
              });
            }}
          >
            Delete
          </Tag>,
        ]}
      >
        <Typography.Paragraph>{item?.body}</Typography.Paragraph>

        <Collapse
          ghost
          className="site-collapse-custom-collapse"
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
        >
          <Collapse.Panel
            key="comments"
            header={
              <span>
                <MessageOutlined /> &nbsp; See comments
              </span>
            }
          >
            <Comments id={item.id} />
          </Collapse.Panel>
        </Collapse>
      </PageHeader>
    </Card>
  );
};

export default Post;

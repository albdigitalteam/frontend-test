import React from "react";
import { Title, SubText, WrapperTitle, TextEmail } from "../styles";
import { useSelector } from "react-redux";

const PostContent = ({ item }) => {
  const users = useSelector((state) => state.appUsers.users);

  const postUser = users.filter((i) => {
    return i.id === item.userId && users;
  });

  return (
    <>
      <WrapperTitle>
        <Title>{item.title}</Title>
        <SubText>{item.body}</SubText>
        <TextEmail>Autor: {postUser?.[0]?.name}</TextEmail>
      </WrapperTitle>
    </>
  );
};

export default PostContent;

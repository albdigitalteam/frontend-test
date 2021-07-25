import React from "react";
import { Image, ViewRow, Title } from "../styles";
import { useNavigation } from "@react-navigation/native";

const FeedList = ({ item }) => {
  const navigation = useNavigation();
  return (
    <ViewRow onPress={() => navigation.navigate("FeedDetails", { item })}>
      <Image
        source={{
          uri: "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/3f511e69e5ea1a91601399471ba0972c",
        }}
      />
      <Title>{item.title.substring(0, 20) + "..."}</Title>
    </ViewRow>
  );
};

export default FeedList;

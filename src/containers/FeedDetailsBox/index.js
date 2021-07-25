import React from "react";
import { Alert, ActivityIndicator } from "react-native";
import { Wrapper, WrapperLoading } from "./styles";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import CommentsContent from "./fragments/CommentsContent";
import PostContent from "./fragments/PostContent";
import { useDispatch, useSelector } from "react-redux";
import HeaderBar from "../../components/HeaderBar";
import { deletePostRequest } from "../../redux/posts/actions";

const FeedDetailsBox = ({ params }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const loading = useSelector((state) => state.appPosts.loading);
  const { item } = useRoute().params;

  return loading ? (
    <WrapperLoading>
      <ActivityIndicator style={{ flex: 1 }} size="large" color="black" />
    </WrapperLoading>
  ) : (
    <Wrapper>
      <HeaderBar
        hasBackButton
        hasTrash
        iconAction={() => {
          Alert.alert("Atenção", "Você quer excluir esse post?", [
            {
              text: "SIM",
              onPress: () => {
                dispatch(deletePostRequest(item.id));
                navigation.goBack();
              },
            },
            { text: "NAO", onPress: () => false, style: "cancel" },
          ]);
        }}
      />
      <PostContent item={item} />
      <CommentsContent item={item} />
    </Wrapper>
  );
};

export default FeedDetailsBox;

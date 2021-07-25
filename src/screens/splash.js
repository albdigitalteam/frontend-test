import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { getPostsRequest } from "../redux/posts/actions";
import { getUsersRequest } from "../redux/users/actions";
import { useSelector } from "react-redux";
import { getCommentsRequest } from "../redux/comments/actions";
import LottieView from "lottie-react-native";

const Splash = ({ params }) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const appstate = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsRequest());
    dispatch(getUsersRequest());
    dispatch(getCommentsRequest());
  }, []);

  useEffect(() => {
    if (
      !appstate.appPosts.loading &&
      !appstate.appComments.loading &&
      !appstate.appUsers.loading
    ) {
      setLoading(false);
      navigation.navigate("Home");
    }
  }, [
    appstate.appPosts.loading,
    appstate.appComments.loading,
    appstate.appUsers.loading,
  ]);

  return (
    loading && (
      <LottieView
        style={{ backgroundColor: "white" }}
        source={require("../_utils/lottie/loading.json")}
        autoPlay
        loop
      />
    )
  );
};

export default Splash;

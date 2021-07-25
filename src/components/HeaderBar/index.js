import React from "react";
import {
  ViewHeader,
  TextHeader,
  ViewIcon,
  Icon,
  ViewRightIcon,
} from "./styles";
import BackIcon from "../../images/back-button.png";
import TrashIcon from "../../images/trash-button.png";
import PlusIcon from "../../images/plus-button.png";
import { useNavigation } from "@react-navigation/native";

const HeaderBar = ({ title, hasTrash, iconAction, hasBackButton }) => {
  const navigation = useNavigation();
  return (
    <ViewHeader>
      <TextHeader>{title}</TextHeader>
      {hasBackButton && (
        <ViewIcon onPress={() => navigation.goBack()}>
          <Icon source={BackIcon} />
        </ViewIcon>
      )}
      {hasTrash ? (
        <ViewRightIcon
          onPress={() => {
            iconAction();
          }}
        >
          <Icon source={TrashIcon} />
        </ViewRightIcon>
      ) : (
        <ViewRightIcon
          onPress={() => {
            iconAction();
          }}
        >
          <Icon source={PlusIcon} />
        </ViewRightIcon>
      )}
    </ViewHeader>
  );
};

export default HeaderBar;

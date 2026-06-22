import MaterialCommunityIcons from "@react-native-vector-icons/material-design-icons";
import AntDesign from "@react-native-vector-icons/ant-design";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import Feather from "@react-native-vector-icons/feather";
import Ionicons from "@react-native-vector-icons/ionicons";
import React, { useContext } from "react";
import { Switch } from "react-native";

import List from "../../../components/UI/List";
import { CommentSettingsContext } from "../../../contexts/SettingsContexts/CommentSettingsContext";
import { ThemeContext } from "../../../contexts/SettingsContexts/ThemeContext";

export default function CommentAppearance() {
  const { theme } = useContext(ThemeContext);

  const {
    voteIndicator,
    toggleVoteIndicator,
    collapseAutoModerator,
    toggleCollapseAutoModerator,
    commentFlairs,
    toggleCommentFlairs,
    tapToCollapseComment,
    toggleTapToCollapseComment,
    collapseChildrenOnly,
    toggleCollapseChildrenOnly,
    showScrollToNextButton,
    toggleShowScrollToNextButton,
  } = useContext(CommentSettingsContext);

  return (
    <List
      title="Comment Appearance Settings"
      items={[
        {
          key: "voteIndicator",
          icon: <Feather name="arrow-up" size={24} color={theme.text} />,
          rightIcon: (
            <Switch
              trackColor={{
                false: theme.iconSecondary,
                true: theme.iconPrimary,
              }}
              value={voteIndicator}
              onValueChange={() => toggleVoteIndicator()}
            />
          ),
          text: "Right side vote indicators",
          onPress: () => toggleVoteIndicator(),
        },
        {
          key: "collapseAutoModerator",
          icon: (
            <MaterialCommunityIcons
              name="robot-angry-outline"
              size={24}
              color={theme.text}
            />
          ),
          rightIcon: (
            <Switch
              trackColor={{
                false: theme.iconSecondary,
                true: theme.iconPrimary,
              }}
              value={collapseAutoModerator}
              onValueChange={() => toggleCollapseAutoModerator()}
            />
          ),
          text: "Collapse AutoModerator",
          onPress: () => toggleCollapseAutoModerator(),
        },
        {
          key: "commentFlairs",
          icon: <AntDesign name="tag" size={24} color={theme.text} />,
          rightIcon: (
            <Switch
              trackColor={{
                false: theme.iconSecondary,
                true: theme.iconPrimary,
              }}
              value={commentFlairs}
              onValueChange={() => toggleCommentFlairs()}
            />
          ),
          text: "Show flairs",
          onPress: () => toggleCommentFlairs(),
        },
        {
          key: "tapToCollapseComment",
          icon: (
            <Ionicons name="chevron-collapse" size={24} color={theme.text} />
          ),
          rightIcon: (
            <Switch
              trackColor={{
                false: theme.iconSecondary,
                true: theme.iconPrimary,
              }}
              value={tapToCollapseComment}
              onValueChange={() => toggleTapToCollapseComment()}
            />
          ),
          text: "Tap to collapse",
          onPress: () => toggleTapToCollapseComment(),
        },
        {
          key: "collapseChildrenOnly",
          icon: (
            <MaterialCommunityIcons
              name="collapse-all"
              size={24}
              color={theme.text}
            />
          ),
          rightIcon: (
            <Switch
              trackColor={{
                false: theme.iconSecondary,
                true: theme.iconPrimary,
              }}
              value={collapseChildrenOnly}
              onValueChange={() => toggleCollapseChildrenOnly()}
            />
          ),
          text: "Collapse children only",
          onPress: () => toggleCollapseChildrenOnly(),
        },
        {
          key: "showScrollToNextButton",
          icon: <AntDesign name="down-circle" size={24} color={theme.text} />,
          rightIcon: (
            <Switch
              trackColor={{
                false: theme.iconSecondary,
                true: theme.iconPrimary,
              }}
              value={showScrollToNextButton}
              onValueChange={() => toggleShowScrollToNextButton()}
            />
          ),
          text: "Show scroll to next button",
          onPress: () => toggleShowScrollToNextButton(),
        },
      ]}
    />
  );
}

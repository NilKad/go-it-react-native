import { react } from "react";
import { StyleSheet, Text, View } from "react-native";

const CommentsScreen = () => {
  return (
    <Views style={styles.container}>
      <Text>CommentsScreen</Text>
    </Views>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CommentsScreen;

import { StyleSheet, Text, View } from "react-native";

const LibraryScreen = () => {
  return (
    <View style={styles.container}>
      <Text>libraryScreen</Text>
    </View>
  );
};

export default LibraryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

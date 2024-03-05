import { StyleSheet, Text, View } from "react-native";

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FavoritesScreen</Text>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
});

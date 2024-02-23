import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { StyleSheet } from "react-native";

const Home = () => {
  return (
    <LinearGradient
      colors={["#FF407D", "#FB88B4", "#7F27FF", "#40A2E3"]}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;

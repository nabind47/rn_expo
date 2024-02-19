import { Button, StyleSheet, View } from "react-native";

import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

const Home = () => {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: "violet",
        }}
      />
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;

import { useState } from "react";
import { Button, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const Home = () => {
  const animation = useSharedValue(0);
  const [clicked, setClicked] = useState(false);
  const animatedStyle = useAnimatedStyle(() => {
    return { translateX: animation.value };
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.View
        style={[
          { width: 100, height: 100, backgroundColor: "pink" },
          animatedStyle,
        ]}
      />

      <Button
        title="Animate"
        onPress={() => {
          if (clicked) {
            animation.value = withTiming(100, { duration: 100 });
          } else {
            animation.value = withTiming(-100, { duration: 600 });
          }
          setClicked(!clicked);
        }}
      />
    </View>
  );
};

export default Home;

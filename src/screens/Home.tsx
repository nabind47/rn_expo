import { useState } from "react";
import { Button, View } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const Home = () => {
  const animation = useSharedValue(0);
  const [clicked, setClicked] = useState(false);

  const width = interpolate(animation.value, [1, 0], [100, 200]);
  const borderRadius = interpolate(animation.value, [1, 0], [0, 100]);
  const backgroundColor = interpolateColor(
    animation.value,
    [1, 0],
    ["pink", "orange"]
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width,
      height: width,
      backgroundColor,
      borderRadius,
    };
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
            animation.value = withSpring(1);
          } else {
            animation.value = withSpring(0);
          }
          setClicked(!clicked);
        }}
      />
    </View>
  );
};

export default Home;
